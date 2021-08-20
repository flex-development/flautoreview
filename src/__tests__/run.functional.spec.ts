import * as core from '@actions/core'
import * as github from '@actions/github'
import InputsDTO from '@autoreview/dtos/inputs.dto'
import { ReviewEvent } from '@autoreview/enums/review-event.enum'
import type { Inputs } from '@autoreview/interfaces'
import automatable from '@autoreview/utils/automatable.util'
import create from '@autoreview/utils/create-review.util'
import validate from '@autoreview/utils/validate.util'
import INPUTS from '@tests/fixtures/inputs-dto.fixture'
import PAYLOAD from '@tests/fixtures/pr-event-with-requested-reviewer.fixture'
import testSubject from '../run'

/**
 * @file Functional Tests - run
 * @module autoreview/tests/functional/run
 */

jest.mock('@autoreview/utils/automatable.util')
jest.mock('@autoreview/utils/create-review.util')
jest.mock('@autoreview/utils/validate.util')

const mockAutomable = automatable as jest.MockedFunction<typeof automatable>
const mockCore = core as jest.Mocked<typeof core>
const mockCreateReview = create as jest.MockedFunction<typeof create>
const mockGitHub = github as jest.Mocked<typeof github>
const mockValidate = validate as jest.MockedFunction<typeof validate>

describe('functional:run', () => {
  const mockGetInput = (n: string) => INPUTS[n] || ''

  beforeAll(async () => {
    mockGitHub.context.payload = PAYLOAD
  })

  describe('successful run', () => {
    const EXPECTED_INPUTS: Inputs = { ...INPUTS, event: ReviewEvent.APPROVE }

    beforeEach(async () => {
      mockCore.getInput.mockImplementation(mockGetInput)
      mockCore.getMultilineInput.mockImplementation(mockGetInput)

      await testSubject()
    })

    it('should get user inputs', () => {
      expect(mockCore.getInput).toBeCalledTimes(InputsDTO.PROPS.length - 1)
      expect(mockCore.getMultilineInput).toBeCalledTimes(1)
    })

    it('should validate user inputs', () => {
      expect(mockValidate).toBeCalledTimes(1)
      expect(mockValidate).toBeCalledWith(InputsDTO, EXPECTED_INPUTS)
    })

    it('should check if pull request review can be automated', () => {
      expect(mockAutomable).toBeCalledTimes(1)
      expect(mockAutomable).toBeCalledWith(PAYLOAD, EXPECTED_INPUTS)
    })

    it('should attempt to create pull request review', () => {
      expect(mockCreateReview).toBeCalledTimes(1)
      expect(mockCreateReview).toBeCalledWith(PAYLOAD, EXPECTED_INPUTS)
    })
  })

  describe('exception handling', () => {
    it('should force failure given fatal exception', async () => {
      // Arrange
      mockCore.getMultilineInput.mockImplementation(mockGetInput)
      mockCore.getInput.mockImplementation((name: string) => {
        return name === 'token' ? '' : INPUTS[name]
      })

      // Act
      await testSubject()

      // Expect
      expect(mockCore.error).toBeCalledTimes(0)
      expect(mockCore.info).toBeCalledTimes(1)
      expect(mockCore.setFailed).toBeCalledTimes(1)
    })

    it('should not force failure given non-fatal exception', async () => {
      // Arrange
      mockCore.getMultilineInput.mockImplementation(mockGetInput)
      mockCore.getInput.mockImplementation((name: string) => {
        return name === 'reviewers' ? '' : INPUTS[name]
      })

      // Act
      await testSubject()

      // Expect
      expect(mockCore.info).toBeCalledTimes(1)
      expect(mockCore.warning).toBeCalledTimes(1)
      expect(mockCore.setFailed).toBeCalledTimes(0)
    })
  })
})
