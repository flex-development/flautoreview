import type { PullRequestReviewRequestedEvent } from '@octokit/webhooks-types'
import REVIEWER from '@tests/fixtures/pr-event-with-requested-reviewer.fixture'
import TEAM from '@tests/fixtures/pr-event-with-requested-team.fixture'
import { Testcase } from '@tests/utils/types'
import testSubject from '../get-requested.util'

/**
 * @file Unit Tests - getRequested
 * @module autoreview/utils/tests/unit/getRequested
 */

describe('unit:utils/getRequested', () => {
  type Case = Testcase<string> & {
    payload: PullRequestReviewRequestedEvent
    property: 'requested_reviewer.login' | 'requested_team.slug'
  }

  const cases: Case[] = [
    {
      expected: REVIEWER.requested_reviewer.login,
      payload: REVIEWER,
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
