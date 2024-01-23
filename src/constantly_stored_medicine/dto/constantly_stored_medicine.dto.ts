import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsBoolean } from "class-validator";
import { CreateConstantlyStoredMedicineDto } from './create-constantly_stored_medicine.dto';

export class ConstantlyStoredMedicineDto extends PartialType(CreateConstantlyStoredMedicineDto) {
  @IsNumber()
  readonly id: number;
  @IsBoolean()
  readonly isMissing: boolean;
}
