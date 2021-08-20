import github from '@actions/github'
import type { GitHub } from '@actions/github/lib/utils'
import { ExceptionLevel } from '@autoreview/enums/exception-level.enum'
import type { Inputs } from '@autoreview/interfaces'
import type { WebhookPayloadAutomatable } from '@autoreview/types'
import { ExceptionStatusCode } from '@flex-development/exceptions/enums'
import Exception from '@flex-development/exceptions/exceptions/base.exception'
import INPUTS from '@tests/fixtures/inputs-dto.fixture'
import USER from '@tests/fixtures/pr-event-with-requested-reviewer.fixture'
import REQUEST_ERROR from '@tests/fixtures/request-error.fixture'
import type { TestcaseThrows } from '@tests/utils/types'
import testSubject from '../create-review.util'

/**
 * @file Unit Tests - createReview
 * @module autoreview/utils/tests/unit/createReview
 */

const mockOctokit = github.getOctokit('') as jest.Mocked<
  InstanceType<typeof GitHub>
>

describe('unit:utils/createReview', () => {
  it('should convert RequestError into Exception', async () => {
    // Arrange
    const mock = mockOctokit.rest.pulls.createReview as jest.MockedFunction<
      typeof mockOctokit.rest.pulls.createReview
    >

    let exception = {} as Exception

    // Act
    mock.mockRejectedValue(REQUEST_ERROR)
    try {
      await testSubject(USER, INPUTS)
    } catch (error) {
      exception = error
    }

    expect(exception).toMatchObject({
      code: REQUEST_ERROR.status,
      data: {
        level: ExceptionLevel.ERROR,
        request: REQUEST_ERROR.request,
        response: REQUEST_ERROR.response
      },
      message: REQUEST_ERROR.message
    })
  })

  describe('throws', () => {
    type Case = TestcaseThrows & {
      inputs: Inputs
      payload: WebhookPayloadAutomatable
    }

    const cases: Case[] = [
      {
        expected: {
          code: ExceptionStatusCode.PRECONDITION_FAILED,
          data: { level: ExceptionLevel.INFO },
          errors: { reviewers: 'user' },
          message: `${USER.requested_reviewer.login} cannot automate reviews`
        },
        failure: 'reviewer or team cannot automate reviews',
        inputs: { ...INPUTS, reviewers: 'user', senders: undefined },
        payload: USER
      },
      {
        expected: {
          code: ExceptionStatusCode.PRECONDITION_FAILED,
          data: { level: ExceptionLevel.INFO },
          errors: { senders: 'senders' },
          message: `${USER.sender.login} cannot receive automated reviews`
        },
        failure: 'sender cannot receive automated reviews',
        inputs: { ...INPUTS, senders: 'senders' },
        payload: USER
      }
    ]

    it.each<Case>(cases)('should throw if $failure', async testcase => {
      // Arrange
      const { expected, payload, inputs } = testcase
      let exception = {} as Exception

      // Act
      try {
        await testSubject(payload, inputs)
      } catch (error) {
        exception = error
      }

      // Expect
      expect(exception).toMatchObject(expected)
    })
  })
})
