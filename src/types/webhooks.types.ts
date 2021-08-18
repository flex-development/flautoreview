import type {
  InstallationLite,
  Organization,
  PullRequest,
  Repository,
  Team,
  User
} from '@octokit/webhooks-types'

/**
 * @file Type Definitions - Webhooks
 * @module autoreview/types/webhooks
 */

/**
 * Object representing a webhook payload [pull_request][1] when a review is
 * requested from a team.
 *
 * [1]: https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request
 */
export type WebhookPayloadReviewRequestedTeam = {
  action: 'review_requested'
  installation?: InstallationLite
  number: number
  organization?: Organization
  pull_request: PullRequest
  repository: Repository
  requested_team: Team
  sender: User
}

/**
 * Object representing a webhook payload [pull_request][1] when a review is
 * requested from a user.
 *
 * [1]: https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request
 */
export type WebhookPayloadReviewRequestedUser = {
  action: 'review_requested'
  installation?: InstallationLite
  number: number
  organization?: Organization
  pull_request: PullRequest
  repository: Repository
  requested_reviewer: User
  sender: User
}

// Rename `@octokit/webhooks-types` type definitions
export type {
  PullRequestReviewRequestedEvent as WebhookPayloadReviewRequested,
  Schema as WebhookPayload
} from '@octokit/webhooks-types'
