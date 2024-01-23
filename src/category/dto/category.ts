import { IsNumber, IsString } from 'class-validator';
export class CategoryDto {
  @IsNumber()
  readonly id: number;
  @IsString()
  readonly name: string;
}
