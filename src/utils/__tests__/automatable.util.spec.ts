import { ExceptionLevel } from '@autoreview/enums/exception-level.enum'
import type { WebhookPayload } from '@autoreview/types'
import { ExceptionStatusCode } from '@flex-development/exceptions/enums'
import Exception from '@flex-development/exceptions/exceptions/base.exception'
import PAYLOAD from '@tests/fixtures/pr-event-with-requested-reviewer.fixture'
import type { TestcaseThrows } from '@tests/utils/types'
import testSubject from '../automatable.util'

/**
 * @file Unit Tests - automatable
 * @module autoreview/utils/tests/unit/automatable
 */

describe('unit:utils/automatable', () => {
  const { action, pull_request } = PAYLOAD

  describe('throws', () => {
    type Case = TestcaseThrows & { payload: Partial<WebhookPayload> }

    const cases: Case[] = [
      {
        expected: {
          code: ExceptionStatusCode.NOT_FOUND,
          data: { level: ExceptionLevel.ERROR },
          errors: { pull_request: null },
          message: 'Missing pull_request data from webhook payload'
        },
        failure: 'payload.pull_request is NIL',
        payload: {}
      },
      {
        expected: {
          code: ExceptionStatusCode.NOT_FOUND,
          data: { level: ExceptionLevel.ERROR },
          errors: { action: 'review_request_removed' },
          message: `Review request not found for pull #${pull_request.number}`
        },
        failure: `payload.action !== 'review_requested'`,
        payload: { action: 'review_request_removed', pull_request }
      },
      {
        expected: {
          code: ExceptionStatusCode.BAD_REQUEST,
          data: { level: ExceptionLevel.ERROR },
          errors: { pull_request: { state: 'closed' } },
          message: `Pull #${pull_request.number} is closed`
        },
        failure: `payload.pull_request.state === 'closed'`,
        payload: { action, pull_request: { ...pull_request, state: 'closed' } }
      }
    ]

    it.each<Case>(cases)('should throw if $failure', testcase => {
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
