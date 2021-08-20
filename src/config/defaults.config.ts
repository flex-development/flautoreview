import { ReviewEvent } from '@flautoreview/enums/review-event.enum'
import type { Inputs } from '@flautoreview/interfaces'

/**
 * @file Configuration - Default Inputs
 * @module flautoreview/config/defaults
 */

/**
 * @property {Partial<Inputs>} DEFAULT_INPUTS - Default action inputs
 */
const DEFAULT_INPUTS: Partial<Inputs> = {
  event: ReviewEvent.APPROVE
}

export default DEFAULT_INPUTS
