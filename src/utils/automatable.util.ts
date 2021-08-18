import { ExceptionLevel } from '@autoreview/enums/exception-level.enum'
import type { WebhookPayload } from '@autoreview/types'
import { ExceptionStatusCode } from '@flex-development/exceptions/enums'
import Exception from '@flex-development/exceptions/exceptions/base.exception'
import type { PullRequestEvent } from '@octokit/webhooks-definitions/schema'

/**
 * @file Utility - automatable
 * @module autoreview/utils/automatable
 */

/**
 * Checks if a pull request open and a review was requested.
 *
 * - `payload.pull_request is NIL`
 * - `payload.action !== 'review_requested'`
 * - `payload.pull_request.state === 'closed'`
 *
 *
 * [1]: https://docs.github.com/developers/webhooks-and-payloads/webhooks/webhook-payloads-and-payloads
 *
 * @param {WebhookPayload} payload - [Webhook payload][1] object
 * @return {boolean} `true` if review submission is automatable
 * @throws {Exception}
 */
const automatable = (payload: WebhookPayload): true => {
  const { action, pull_request } = payload as PullRequestEvent

  if (!pull_request) {
    const data = {
      errors: { pull_request: null },
      level: ExceptionLevel.ERROR,
      message: 'Missing pull_request data from webhook payload'
    }

    throw new Exception(ExceptionStatusCode.NOT_FOUND, undefined, data)
  }

  if (action !== 'review_requested') {
    const data = {
      errors: { action },
      level: ExceptionLevel.ERROR,
      message: `Review request not found for pull #${pull_request.number}`
    }

    throw new Exception(ExceptionStatusCode.NOT_FOUND, undefined, data)
  }

  if (pull_request.state === 'closed') {
    const data = {
      errors: { pull_request: { state: pull_request.state } },
      level: ExceptionLevel.ERROR,
      message: `Pull #${pull_request.number} is closed`
    }

    throw new Exception(ExceptionStatusCode.BAD_REQUEST, undefined, data)
  }

  return true
}

export default automatable
