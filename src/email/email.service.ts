import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { TConstantlyStoredMedicine } from '../constantly_stored_medicine/types/constantly_stored_medicine';
import { Medicine } from '../medicine/entities/medicine.entity';
import { UserService } from '../user/user.service';
import {
  expiredMedicinesTemplate,
  missingMedicinesTemplate
} from './html_template';

@Injectable()
export class EmailService {
  private transporter;
  
  constructor(
    private configService: ConfigService,
    private usersService: UserService
  ) {
    this.transporter = nodemailer.createTransport({
      service: this.configService.get<string>('EMAIL_SENDER_SERVICE'),
      auth: {
        user: this.configService.get<string>('EMAIL_SENDER_NAME'),
        pass: this.configService.get<string>('EMAIL_SENDER_PASSWORD'),
      },
    });
  }
  
  async sendMissingMedicinesEmail(missingMedicines: TConstantlyStoredMedicine[]) {
    const users = await this.usersService.findAll();
    const mailOptions = {
      from: this.configService.get<string>('EMAIL_SENDER_NAME'),
      to: users,
      subject: 'Missing Medicines',
      html: missingMedicinesTemplate(missingMedicines),
    };
    
    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending email: ', error);
    }
  }
  async sendExpiredMedicinesEmail(expiredMedicines: Medicine[]) {
    const users = await this.usersService.findAll();
    const mailOptions = {
      from: this.configService.get<string>('EMAIL_SENDER_NAME'),
      to: users,
      subject: 'Expired Medicines',
      html: expiredMedicinesTemplate(expiredMedicines),
    };
    
    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending email: ', error);
    }
  }
}
