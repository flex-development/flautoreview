import { ExceptionLevel } from '@autoreview/enums/exception-level.enum'
import type { WebhookPayloadAutomatable } from '@autoreview/types'
import { ExceptionStatusCode } from '@flex-development/exceptions/enums'
import Exception from '@flex-development/exceptions/exceptions/base.exception'
import type { ObjectPlain } from '@flex-development/tutils'

/**
 * @file Utility - getRequested
 * @module autoreview/utils/getRequested
 */

/**
 * Returns the user login or team slug of a pull request's requested reviewer.
 *
 * @param {WebhookPayloadAutomatable} payload - Webhook payload event
 * @return {string} User login or team slug
 * @throws {Exception}
 */
const getRequested = (payload: WebhookPayloadAutomatable): string => {
  const { requested_reviewer, requested_team } = payload as ObjectPlain

  const requested = requested_reviewer?.login ?? requested_team?.slug

  if (!requested || !requested.length) {
    throw new Exception(ExceptionStatusCode.NOT_FOUND, undefined, {
      level: ExceptionLevel.ERROR,
      message: 'Cannot find requested reviewer or team'
    })
  }

  return requested
}

export default getRequested
