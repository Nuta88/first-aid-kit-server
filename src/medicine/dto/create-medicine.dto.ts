import {
  IsNumber,
  IsString,
  IsNotEmpty,
  ValidateNested,
  IsOptional,
  Min,
  IsDate,
  Length
} from 'class-validator';
import { Type } from 'class-transformer';
import { CategoryDto } from '../../category/dto/category';

export class CreateMedicineDto {
  @IsString()
  @IsOptional()
  readonly id: string;
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  readonly name: string;
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  readonly expiration_date: string;
  @IsString()
  @IsOptional()
  @Length(0, 300)
  readonly description?: string;
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  readonly amount: number;
  @ValidateNested({ each: true })
  @Type(() => CategoryDto)
  readonly categories: CategoryDto[];
}
