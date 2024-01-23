import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from '../category/entities/category.entity';
import { Medicine } from './entities/medicine.entity';
import { MedicineService } from './medicine.service';
import { MedicineController } from './medicine.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Medicine, Category])],
  controllers: [MedicineController],
  providers: [MedicineService, JwtService],
})
export class MedicineModule {}
