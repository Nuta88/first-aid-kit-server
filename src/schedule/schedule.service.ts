import { Injectable } from '@nestjs/common';
import * as cron from 'node-cron';
import { ConstantlyStoredMedicineService } from '../constantly_stored_medicine/constantly_stored_medicine.service';
import { EmailService } from '../email/email.service';
import { MedicineService } from '../medicine/medicine.service';

@Injectable()
export class SchedulerService {
  constructor(
    private readonly medicineService: MedicineService,
    private readonly constantlyStoredMedicineService: ConstantlyStoredMedicineService,
    private readonly emailService: EmailService
  ) {}
  
  startCron() {
    cron.schedule('0 0 1 * *', async () => {
      const expiredMedicines = await this.medicineService.findExpired({});
      if ( expiredMedicines?.length ) {
        await this.emailService.sendExpiredMedicinesEmail(expiredMedicines);
      }
    });
    cron.schedule('0 0 * * *', async () => {
      const missingMedicines = (await this.constantlyStoredMedicineService.findAll())?.filter(m => m.isMissing);
      if ( missingMedicines?.length ) {
        await this.emailService.sendMissingMedicinesEmail(missingMedicines);
      }
    });
  }
}
