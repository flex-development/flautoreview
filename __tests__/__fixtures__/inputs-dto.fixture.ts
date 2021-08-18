import { ReviewEvent } from '@autoreview/enums/review-event.enum'
import type { Inputs } from '@autoreview/interfaces'

/**
 * @file Global Fixture - InputsDTO
 * @module tests/fixtures/inputs-dto
 */

export default {
  body: 'lgtm 👍🏾',
  event: ReviewEvent.APPROVE,
  reviewers: 'flexdevelopment',
  senders: 'unicornware',
  token: 'token'
} as Inputs
