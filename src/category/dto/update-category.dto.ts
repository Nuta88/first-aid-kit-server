import { PartialType } from '@nestjs/mapped-types';
import {
  IsNotEmpty,
  IsNumber
} from 'class-validator';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @IsNumber()
  @IsNotEmpty()
  readonly id: number;
}
