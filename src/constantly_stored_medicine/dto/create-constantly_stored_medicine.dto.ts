import { Type } from 'class-transformer';
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  ValidateNested
} from 'class-validator';
import { CategoryDto } from "../../category/dto/category";

export class CreateConstantlyStoredMedicineDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  @IsIn(['name', 'category'])
  readonly priority: 'name' | 'category';
  @IsString()
  @IsOptional()
  @Length(0, 300)
  readonly description?: string;
  @ValidateNested({ each: true })
  @Type(() => CategoryDto)
  readonly categories: CategoryDto[];
}
