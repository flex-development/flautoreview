import { ReviewEvent } from '@flautoreview/enums/review-event.enum'
import type { Inputs } from '@flautoreview/interfaces'
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'

/**
 * @file Data Transfer Objects - InputsDTO
 * @module flautoreview/dtos/InputsDTO
 */

/**
 * Options used by `flautoreview`.
 *
 * @implements {Inputs}
 */
export default class InputsDTO implements Inputs {
  /**
   * @property {(keyof Inputs)[]} PROPS - Data transfer object property names
   */
  static PROPS: (keyof Inputs)[] = [
    'body',
    'event',
    'reviewers',
    'senders',
    'token'
  ]

  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @IsOptional()
  body?: Inputs['body']

  @IsEnum(ReviewEvent)
  @IsOptional()
  event?: Inputs['event']

  @IsString()
  @IsOptional()
  reviewers?: Inputs['reviewers']

  @IsString()
  @IsOptional()
  senders?: Inputs['senders']

  @IsString()
  @IsNotEmpty({ message: 'GitHub personal access token required' })
  token: Inputs['token']
}
