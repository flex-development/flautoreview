import github from '@actions/github'
import type { GitHub } from '@actions/github/lib/utils'
import getRequested from '@autoreview/utils/get-requested.util'
import INPUTS from '@tests/fixtures/inputs-dto.fixture'
import PAYLOAD from '@tests/fixtures/pr-event-with-requested-team.fixture'
import testSubject from '../create-review.util'

/**
 * @file Functional Tests - createReview
 * @module autoreview/utils/tests/functional/createReview
 */

jest.mock('@autoreview/utils/get-requested.util')

const mockGetRequested = getRequested as jest.Mocked<typeof getRequested>
const mockOctokit = github.getOctokit('') as jest.Mocked<
  InstanceType<typeof GitHub>
>

describe('functional:utils/createReview', () => {
  beforeEach(async () => {
    await testSubject(PAYLOAD, {
      ...INPUTS,
      reviewers: PAYLOAD.requested_team.slug
    })
  })

  it('should get requested reviewer or team', () => {
    expect(mockGetRequested).toBeCalledTimes(1)
    expect(mockGetRequested).toBeCalledWith(PAYLOAD)
  })

  it('should call octokit.rest.pulls.createReview', () => {
    expect(mockOctokit.rest.pulls.createReview).toBeCalledTimes(1)
    expect(mockOctokit.rest.pulls.createReview).toBeCalledWith({
      body: INPUTS.body,
      event: INPUTS.event,
      owner: github.context.repo.owner,
      pull_number: PAYLOAD.pull_request.number,
      repo: github.context.repo.repo
    })
  })
})
