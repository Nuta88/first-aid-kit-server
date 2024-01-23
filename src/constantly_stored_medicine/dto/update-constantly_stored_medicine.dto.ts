import { PartialType } from '@nestjs/mapped-types';
import { IsNumber } from "class-validator";
import { CreateConstantlyStoredMedicineDto } from './create-constantly_stored_medicine.dto';

export class UpdateConstantlyStoredMedicineDto extends PartialType(CreateConstantlyStoredMedicineDto) {
  @IsNumber()
  readonly id: number;
}
