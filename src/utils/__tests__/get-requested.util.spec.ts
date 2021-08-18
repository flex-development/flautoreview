import type { WebhookPayloadReviewRequested } from '@autoreview/types'
import USER from '@tests/fixtures/pr-event-with-requested-reviewer.fixture'
import TEAM from '@tests/fixtures/pr-event-with-requested-team.fixture'
import type { Testcase } from '@tests/utils/types'
import testSubject from '../get-requested.util'

/**
 * @file Unit Tests - getRequested
 * @module autoreview/utils/tests/unit/getRequested
 */

describe('unit:utils/getRequested', () => {
  type Case = Testcase<string> & {
    payload: WebhookPayloadReviewRequested
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
