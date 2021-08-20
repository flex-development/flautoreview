import * as github from '@actions/github'
import DEFAULT_INPUTS from '@flautoreview/config/defaults.config'
import { ExceptionLevel } from '@flautoreview/enums/exception-level.enum'
import type { Inputs } from '@flautoreview/interfaces'
import type {
  CreateReviewResponse,
  WebhookPayloadAutomatable
} from '@flautoreview/types'
import { ExceptionStatusCode } from '@flex-development/exceptions/enums'
import Exception from '@flex-development/exceptions/exceptions/base.exception'
import type { RestEndpointMethodTypes as RestEndpoint } from '@octokit/plugin-rest-endpoint-methods'
import type { RequestError } from '@octokit/request-error'
import join from 'lodash.join'
import merge from 'lodash.merge'
import getRequested from './get-requested.util'

/**
 * @file Utility - createReview
 * @module flautoreview/utils/createReview
 */

/**
 * Creates a new pull request review.
 *
 * @async
 * @param {WebhookPayloadAutomatable} payload - Webhook
 * payload event data
 * @param {Inputs} inputs - Action inputs
 * @return {Promise<CreateReviewResponse>} Promise containing new review data
 * @throws {Exception}
 */
const createReview = async (
  payload: WebhookPayloadAutomatable,
  inputs: Inputs
): Promise<CreateReviewResponse> => {
  try {
    // Spread inputs
    const { reviewers, senders, token } = merge({}, DEFAULT_INPUTS, inputs)

    // Get requested reviewer or team
    const requested = getRequested(payload)

    // Check if requested reviewer or team is included in inputs.reviewers
    const reviewer = reviewers?.includes(requested) ?? false

    // Throw if the requested reviewer or team's reviews cannot be automated
    if (!reviewer) {
      throw new Exception(ExceptionStatusCode.PRECONDITION_FAILED, undefined, {
        errors: { reviewers },
        level: ExceptionLevel.INFO,
        message: `${requested} cannot automate reviews`
      })
    }

    // Check if senders are allowed to request automated reviews
    const sender = senders?.includes(payload.sender.login) ?? false

    // Throw if payload.sender cannot receive automated reviews
    if (senders && !sender) {
      throw new Exception(ExceptionStatusCode.PRECONDITION_FAILED, undefined, {
        errors: { senders },
        level: ExceptionLevel.INFO,
        message: `${payload.sender.login} cannot receive automated reviews`
      })
    }

    // Get endpoint parameters
    const params: RestEndpoint['pulls']['createReview']['parameters'] = {
      body: join(inputs.body, ' '),
      event: inputs.event,
      owner: github.context.repo.owner,
      pull_number: payload.pull_request.number,
      repo: github.context.repo.repo
    }

    // Create new review
    return await github.getOctokit(token).rest.pulls.createReview(params)
  } catch (error) {
    if (error.constructor.name === 'Exception') throw error

    const { message, request, response, status } = error as RequestError

    throw new Exception(status, message, {
      level: ExceptionLevel.ERROR,
      request,
      response
    })
  }
}

export default createReview
