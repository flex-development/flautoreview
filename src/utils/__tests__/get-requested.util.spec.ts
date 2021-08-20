import { ExceptionLevel } from '@flautoreview/enums/exception-level.enum'
import type { WebhookPayloadAutomatable } from '@flautoreview/types'
import { ExceptionStatusCode } from '@flex-development/exceptions/enums'
import Exception from '@flex-development/exceptions/exceptions/base.exception'
import USER from '@tests/fixtures/pr-event-with-requested-reviewer.fixture'
import TEAM from '@tests/fixtures/pr-event-with-requested-team.fixture'
import type { Testcase, TestcaseThrows } from '@tests/utils/types'
import testSubject from '../get-requested.util'

/**
 * @file Unit Tests - getRequested
 * @module flautoreview/utils/tests/unit/getRequested
 */

describe('unit:utils/getRequested', () => {
  describe('returns', () => {
    type Case = Testcase<string> & {
      payload: WebhookPayloadAutomatable
      property: 'requested_reviewer.login' | 'requested_team.slug'
    }

    const cases: Case[] = [
      {
        expected: USER.requested_reviewer.login,
        payload: USER,
        property: 'requested_reviewer.login'
      },
      {
        expected: TEAM.requested_team.slug,
        payload: TEAM,
        property: 'requested_team.slug'
      }
    ]

    it.each<Case>(cases)('should return $property from payload', testcase => {
      // Arrange
      const { expected, payload } = testcase

      // Act + Expect
      expect(testSubject(payload)).toBe(expected)
    })
  })

  describe('throws', () => {
    type Case = TestcaseThrows & { payload: WebhookPayloadAutomatable }

    const cases: Case[] = [
      {
        expected: {
          code: ExceptionStatusCode.NOT_FOUND,
          data: { level: ExceptionLevel.ERROR },
          message: 'Cannot find requested reviewer or team'
        },
        failure: 'requested reviewer or team not found',
        payload: {
          ...TEAM,
          requested_team: { ...TEAM.requested_team, slug: '' }
        }
      }
    ]

    it.each<Case>(cases)('should throw if $failure', testcase => {
      // Arrange
      const { expected, payload } = testcase
      let exception = {} as Exception

      // Act
      try {
        testSubject(payload)
      } catch (error) {
        exception = error
      }

      // Expect
      expect(exception).toMatchObject(expected)
    })
  })
})
