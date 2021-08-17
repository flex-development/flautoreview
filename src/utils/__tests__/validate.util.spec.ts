import Exception from '@flex-development/exceptions/exceptions/base.exception'
import { IsString } from 'class-validator'
import testSubject from '../validate.util'

/**
 * @file Unit Tests - validate
 * @module autoreview/utils/tests/unit/validate
 */

describe('unit:utils/validate', () => {
  class Model {
    @IsString()
    $property: string
  }

  describe('error handling', () => {
    it('should throw ValidationException', () => {
      // Arrange
      let exception = {} as Exception

      // Act
      try {
        testSubject(Model, {})
      } catch (error) {
        exception = error
      }

      // Expect
      expect(exception.constructor.name).toBe('ValidationException')
    })
  })
})
