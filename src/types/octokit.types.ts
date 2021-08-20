import type { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods'
import type {
  InstallationLite,
  Organization,
  PullRequest,
  Repository,
  Team,
  User
} from '@octokit/webhooks-definitions/schema'

/**
 * @file Type Definitions - Octokit
 * @module autoreview/types/octokit
 */

/**
 * Object representing `200 OK` response after creating a pull request review.
 */
export type CreateReviewResponse =
  RestEndpointMethodTypes['pulls']['createReview']['response']

/**
 * Object representing a webhook payload [pull_request][1] when a review is
 * requested from a user or team.
 *
 * [1]: https://docs.github.com/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request
 */
export type WebhookPayloadAutomatable =
  | WebhookPayloadAutomatableTeam
  | WebhookPayloadAutomatableUser

/**
 * Object representing a webhook payload [pull_request][1] when a review is
 * requested from a team.
 *
 * [1]: https://docs.github.com/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request
 */
export type WebhookPayloadAutomatableTeam = {
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
 * [1]: https://docs.github.com/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request
 */
export type WebhookPayloadAutomatableUser = {
  action: 'review_requested'
  installation?: InstallationLite
  number: number
  organization?: Organization
  pull_request: PullRequest
  repository: Repository
  requested_reviewer: User
  sender: User
}
