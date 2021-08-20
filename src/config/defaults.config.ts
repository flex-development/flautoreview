import { ReviewEvent } from '@autoreview/enums/review-event.enum'
import type { Inputs } from '@autoreview/interfaces'

/**
 * @file Configuration - Default Inputs
 * @module autoreview/config/defaults
 */

/**
 * @property {Partial<Inputs>} DEFAULT_INPUTS - Default action inputs
 */
const DEFAULT_INPUTS: Partial<Inputs> = {
  event: ReviewEvent.APPROVE
}

export default DEFAULT_INPUTS
