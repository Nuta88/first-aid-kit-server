import {
  IsNumber,
  IsString,
  Length
} from 'class-validator';
export class CategoryDto {
  @IsNumber()
  readonly id: number;
  @IsString()
  @Length(1, 50)
  readonly name: string;
}
