import * as core from '@actions/core'
import * as github from '@actions/github'
import { ExceptionStatusCode } from '@flex-development/exceptions/enums'
import Exception from '@flex-development/exceptions/exceptions/base.exception'
import { ExceptionJSON } from '@flex-development/exceptions/interfaces'
import type { ObjectPlain } from '@flex-development/tutils'
import util from 'util'
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
    let exception: Exception | ExceptionJSON = error as Exception

    // Convert Error into Exception
    if (!exception.className) {
      const code = ExceptionStatusCode.INTERNAL_SERVER_ERROR
      const data = { level: ExceptionLevel.ERROR }

      exception = new Exception(code, error.message, data, error.stack)
    }

    // Get exception as json object
    exception = (exception as Exception).toJSON()

    // Log non-fatal exceptions, but force failure for fatal exceptions
    if (exception.data.level !== ExceptionLevel.ERROR) {
      core[exception.data.level](exception.message)
    } else {
      core.setFailed(exception.message)
    }

    // Log stringified exception
    core.info(util.inspect(exception, false, null))

    return
  }
}

export default run
