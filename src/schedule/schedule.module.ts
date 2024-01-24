import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConstantlyStoredMedicineService } from '../constantly_stored_medicine/constantly_stored_medicine.service';
import { ConstantlyStoredMedicine } from '../constantly_stored_medicine/entities/constantly_stored_medicine.entity';
import { EmailService } from '../email/email.service';
import { Medicine } from '../medicine/entities/medicine.entity';
import { MedicineService } from '../medicine/medicine.service';
import { User } from "../user/entities/user.entity";
import { UserService } from '../user/user.service';
import { SchedulerService } from './schedule.service';

@Module({
  imports: [ TypeOrmModule.forFeature([
    Medicine,
    ConstantlyStoredMedicine,
    User
  ]) ],
  providers: [
    SchedulerService,
    EmailService,
    MedicineService,
    ConstantlyStoredMedicineService,
    ConfigService,
    UserService
  ],
})
export class ScheduleModule {
  constructor(private readonly schedulerService: SchedulerService) {
    this.schedulerService.startCron();
  }
}
