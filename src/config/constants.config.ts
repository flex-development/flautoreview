import type { TVODefaults } from '@flautoreview/types'

/**
 * @file Configuration - Constant Values
 * @module flautoreview/config/constants
 */

/**
 * @property {TVODefaults} DEFAULT_TVO - `class-transformer-validator` options
 * @see https://github.com/MichalLytek/class-transformer-validator
 */
export const DEFAULT_TVO: TVODefaults = Object.freeze({
  transformer: {},
  validator: {
    enableDebugMessages: true,
    forbidNonWhitelisted: true,
    stopAtFirstError: false,
    validationError: { target: false, value: true },
    whitelist: false
  }
})
