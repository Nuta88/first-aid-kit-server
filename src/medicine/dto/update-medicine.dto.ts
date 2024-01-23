import { PartialType } from '@nestjs/mapped-types';
import {
  IsNumber,
  IsString
} from "class-validator";
import { CreateMedicineDto } from './create-medicine.dto';

export class UpdateMedicineDto extends PartialType(CreateMedicineDto) {
  @IsString()
  readonly id: string;
}
