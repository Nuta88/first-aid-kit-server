import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
} from 'typeorm';
import { IsEmail, IsNotEmpty, Length } from "class-validator";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 50, nullable: false })
  @IsNotEmpty({ message: 'The first name is required' })
  first_name: string;
  @Column({ type: 'varchar', length: 50, nullable: false })
  @IsNotEmpty({ message: 'The last name is required' })
  last_name: string;
  @Column({ type: 'varchar', length: 50, nullable: false })
  @Length(6, 50, { message: 'The password must be at least 6 but not longer than 30 characters' })
  @IsNotEmpty({ message: 'The password is required' })
  password: string;
  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  @IsEmail({}, { message: 'Incorrect email' })
  @IsNotEmpty({ message: 'The email is required' })
  email: string;
}
