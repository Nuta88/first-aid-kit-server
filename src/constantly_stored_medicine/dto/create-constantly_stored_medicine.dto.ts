import {
  IsNumber,
  IsString,
  IsNotEmpty,
  ValidateNested,
  IsOptional
} from 'class-validator';
import { Type } from 'class-transformer';
import { CategoryDto } from "../../category/dto/category";
export class CreateConstantlyStoredMedicineDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly priority: string;
  @IsString()
  @IsOptional()
  readonly description?: string;
  @ValidateNested({ each: true })
  @Type(() => CategoryDto)
  readonly categories: CategoryDto[];
}
