import * as core from '@actions/core'
import github from '@actions/github'
import Exception from '@flex-development/exceptions/exceptions/base.exception'
import type { ObjectPlain } from '@flex-development/tutils'
import defaults from './config/defaults.config'
import InputsDTO from './dtos/inputs.dto'
import { ExceptionLevel } from './enums/exception-level.enum'
import type { Inputs } from './interfaces'
import type { WebhookPayloadAutomatable as WebhookPayload } from './types'
import automatable from './utils/automatable.util'
import createReview from './utils/create-review.util'
import validate from './utils/validate.util'

/**
 * @file Run Method
 * @module autoreview/run
 */

/**
 * Runs the GitHub Action workflow.
 *
 * @return {Promise<void>} Empty promise when complete
 */
async function run(): Promise<void> {
  try {
    // Get user inputs
    const dto: Inputs = (() => {
      const inputs: ObjectPlain = {}

      InputsDTO.PROPS.forEach(prop => {
        const method = prop === 'body' ? 'getMultilineInput' : 'getInput'

        inputs[prop] = core[method](prop) || defaults[prop]
      })

      return inputs as Inputs
    })()

    // Validate user inputs
    const inputs = validate(InputsDTO, dto)

    // Check if pull request review can be automated
    automatable(github.context.payload, inputs)

    // Attempt to create new pull request review
    await createReview(github.context.payload as WebhookPayload, inputs)
  } catch (error) {
    const { data, message } = error as Exception

    // Log error, info, notice, or warning. Force failure for fatal exceptions
    core[data.level](message)
    if (data.level === ExceptionLevel.ERROR) core.setFailed(message)

    return
  }
}

export default run
