import {
  IsNumber,
  IsString,
  IsNotEmpty,
  ValidateNested,
  IsOptional
} from 'class-validator';
import { Type } from 'class-transformer';
import { CategoryDto } from "../../category/dto/category";
export class CreateMedicineDto {
  @IsString()
  @IsOptional()
  readonly id: string;
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  readonly expiration_date: string;
  @IsString()
  @IsOptional()
  readonly description?: string;
  @IsNumber()
  readonly amount: number;
  @ValidateNested({ each: true })
  @Type(() => CategoryDto)
  readonly categories: CategoryDto[];
}
