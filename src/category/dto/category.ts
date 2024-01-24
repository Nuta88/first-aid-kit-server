import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length
} from 'class-validator';
export class CategoryDto {
  @IsNumber()
  @IsNotEmpty()
  readonly id: number;
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  readonly name: string;
}
