import { ConstantlyStoredMedicine } from '../entities/constantly_stored_medicine.entity';

export type TConstantlyStoredMedicine = ConstantlyStoredMedicine & { isMissing: boolean };
