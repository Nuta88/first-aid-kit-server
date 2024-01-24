import {
  IsString,
  IsEmail,
  IsNotEmpty,
  Length
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  readonly first_name: string;
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  readonly last_name: string;
  @IsNotEmpty()
  @IsEmail()
  @Length(1, 255)
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  @Length(6, 50)
  readonly password: string;
}
