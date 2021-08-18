import { ReviewEvent } from '@autoreview/enums/review-event.enum'
import type { Inputs } from '@autoreview/interfaces'
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'

/**
 * @file Data Transfer Objects - InputsDTO
 * @module autoreview/dtos/InputsDTO
 */

/**
 * Options used by `autoreview`.
 *
 * @implements {Inputs}
 */
export default class InputsDTO implements Inputs {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  body?: Inputs['body']

  @IsEnum(ReviewEvent)
  @IsOptional()
  event?: Inputs['event']

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  reviewers?: Inputs['reviewers']

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  senders?: Inputs['senders']

  @IsString()
  @IsNotEmpty()
  token: Inputs['token']
}
