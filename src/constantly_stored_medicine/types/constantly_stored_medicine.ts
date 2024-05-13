import { ConstantlyStoredMedicine } from '../entities/constantly_stored_medicine.entity';

export type TConstantlyStoredMedicine = ConstantlyStoredMedicine & { isMissing: boolean };

export enum MedicinePriorityEnum {
  NAME = 'name',
  CATEGORY = 'category'
}
