import {
  IsString,
  IsEmail,
  IsNotEmpty
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly first_name: string;
  @IsString()
  @IsNotEmpty()
  readonly last_name: string;
  @IsEmail()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
