import { ExceptionStatusCode } from '@flex-development/exceptions/enums'
import Exception from '@flex-development/exceptions/exceptions/base.exception'
import type { ExceptionJSON } from '@flex-development/exceptions/interfaces'
import type { Schema as WebhookPayload } from '@octokit/webhooks-types'
import PAYLOAD from '@tests/fixtures/pr-event-with-requested-reviewer.fixture'
import { Testcase } from '@tests/utils/types'
import testSubject from '../automatable.util'

/**
 * @file Unit Tests - automatable
 * @module autoreview/utils/tests/unit/automatable
 */

describe('unit:utils/automatable', () => {
  const { action, pull_request } = PAYLOAD

  describe('throws', () => {
    type Case = Testcase<Partial<ExceptionJSON>> & {
      payload: Partial<WebhookPayload>
      reason: string
    }

    const cases: Case[] = [
      {
        expected: {
          code: ExceptionStatusCode.NOT_FOUND,
          errors: { pull_request: null },
          message: 'Missing pull_request data from webhook payload'
        },
        payload: {},
        reason: 'payload.pull_request is NIL'
      },
      {
        expected: {
          code: ExceptionStatusCode.NOT_FOUND,
          errors: { action: 'review_request_removed' },
          message: `Review request not found for pull #${pull_request.number}`
        },
        payload: { action: 'review_request_removed', pull_request },
        reason: `payload.action !== 'review_requested'`
      },
      {
        expected: {
          code: ExceptionStatusCode.BAD_REQUEST,
          errors: { pull_request: { state: 'closed' } },
          message: `Pull #${pull_request.number} is closed`
        },
        payload: { action, pull_request: { ...pull_request, state: 'closed' } },
        reason: `payload.pull_request.state === 'closed'`
      }
    ]

    it.each<Case>(cases)('should throw if $reason', testcase => {
      // Arrange
      const { expected, payload } = testcase
      let exception = {} as Exception

      // Act
      try {
        testSubject(payload as WebhookPayload)
      } catch (error) {
        exception = error
      }

      // Expect
      expect(exception).toMatchObject(expected)
    })
  })
})
