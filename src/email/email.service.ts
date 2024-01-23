import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { TConstantlyStoredMedicine } from '../constantly_stored_medicine/types/constantly_stored_medicine';
import { Medicine } from '../medicine/entities/medicine.entity';
import {
  expiredMedicinesTemplate,
  missingMedicinesTemplate
} from './html_template';

const sender = {
  service: 'gmail',
  email: 'fak316022@gmail.com',
  pass: 'ozht tbkl baif lnxk'
};

const recipients = ['annwagner8888@gmail.com', 'alkruglov777@gmail.com'];

const to = process.env.NODE_ENV == 'production' ? recipients : recipients[0];

@Injectable()
export class EmailService {
  private transporter;
  
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: sender.service,
      auth: {
        user: sender.email,
        pass: sender.pass,
      },
    });
  }
  
  async sendMissingMedicinesEmail(missingMedicines: TConstantlyStoredMedicine[]) {
    const mailOptions = {
      from: sender.email,
      to,
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
    const mailOptions = {
      from: sender.email,
      to,
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
