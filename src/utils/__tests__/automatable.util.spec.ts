import type { WebhookPayload } from '@actions/github/lib/interfaces'
import { ExceptionLevel } from '@flautoreview/enums/exception-level.enum'
import type { Inputs } from '@flautoreview/interfaces'
import { ExceptionStatusCode } from '@flex-development/exceptions/enums'
import Exception from '@flex-development/exceptions/exceptions/base.exception'
import INPUTS from '@tests/fixtures/inputs-dto.fixture'
import PAYLOAD from '@tests/fixtures/pr-event-with-requested-reviewer.fixture'
import type { TestcaseThrows } from '@tests/utils/types'
import testSubject from '../automatable.util'

/**
 * @file Unit Tests - automatable
 * @module flautoreview/utils/tests/unit/automatable
 */

describe('unit:utils/automatable', () => {
  const { action, pull_request } = PAYLOAD

  describe('throws', () => {
    type Case = TestcaseThrows & {
      inputs: Partial<Inputs>
      payload: Partial<WebhookPayload>
    }

    const cases: Case[] = [
      {
        expected: {
          code: ExceptionStatusCode.NOT_FOUND,
          data: { level: ExceptionLevel.ERROR },
          errors: { pull_request: null },
          message: 'Missing pull_request data from webhook payload'
        },
        failure: 'payload.pull_request is NIL',
        inputs: INPUTS,
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
        inputs: INPUTS,
        payload: { action: 'review_request_removed', pull_request }
      },
      {
        expected: {
          code: ExceptionStatusCode.BAD_REQUEST,
          data: { level: ExceptionLevel.WARN },
          errors: { pull_request: { state: 'closed' } },
          message: `Pull #${pull_request.number} is closed`
        },
        failure: `payload.pull_request.state === 'closed'`,
        inputs: INPUTS,
        payload: { action, pull_request: { ...pull_request, state: 'closed' } }
      },
      {
        expected: {
          code: ExceptionStatusCode.NOT_FOUND,
          data: { level: ExceptionLevel.WARN },
          errors: { reviewers: '' },
          message: 'No reviewers or teams to automate reviews on behalf of'
        },
        failure: `inputs.reviewers is an empty string`,
        inputs: { ...INPUTS, reviewers: '' },
        payload: PAYLOAD
      },
      {
        expected: {
          code: ExceptionStatusCode.NOT_FOUND,
          data: { level: ExceptionLevel.WARN },
          errors: { reviewers: undefined },
          message: 'No reviewers or teams to automate reviews on behalf of'
        },
        failure: `inputs.reviewers is NIL`,
        inputs: { ...INPUTS, reviewers: undefined },
        payload: PAYLOAD
      },
      {
        expected: {
          code: ExceptionStatusCode.NOT_FOUND,
          data: { level: ExceptionLevel.WARN },
          errors: { senders: '' },
          message: 'No senders allowed to receive automated reviewers'
        },
        failure: `inputs.senders is an empty string`,
        inputs: { ...INPUTS, senders: '' },
        payload: PAYLOAD
      }
    ]

    it.each<Case>(cases)('should throw if $failure', testcase => {
      // Arrange
      const { expected, inputs, payload } = testcase
      let exception = {} as Exception

      // Act
      try {
        testSubject(payload as WebhookPayload, inputs as Inputs)
      } catch (error) {
        exception = error
      }

      // Expect
      expect(exception).toMatchObject(expected)
    })
  })
})
