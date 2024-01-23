import { Module } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../category/entities/category.entity';
import { Medicine } from '../medicine/entities/medicine.entity';
import { MedicineService } from "../medicine/medicine.service";
import { ConstantlyStoredMedicine } from './entities/constantly_stored_medicine.entity';
import { ConstantlyStoredMedicineService } from './constantly_stored_medicine.service';
import { ConstantlyStoredMedicineController } from './constantly_stored_medicine.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConstantlyStoredMedicine, Category, Medicine])],
  controllers: [ConstantlyStoredMedicineController],
  providers: [ConstantlyStoredMedicineService, MedicineService, JwtService],
})
export class ConstantlyStoredMedicineModule {}
