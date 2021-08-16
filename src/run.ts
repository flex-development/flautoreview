import * as core from '@actions/core'

/**
 * @file Main Method
 * @module autoreview/main
 */

/**
 * Runs the GitHub Action workflow.
 *
 * @return {Promise<void>} Empty promise when complete
 */
async function run(): Promise<void> {
  try {
    //
  } catch (error) {
    core.setFailed(error.message)
  }
}

export default run
