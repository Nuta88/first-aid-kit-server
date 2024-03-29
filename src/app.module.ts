import {
  Module,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from "@nestjs/jwt";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule as  NestScheduleModule } from '@nestjs/schedule';

import { CategoryModule } from './category/category.module';
import { MedicineModule } from './medicine/medicine.module';
import { ConstantlyStoredMedicineModule } from './constantly_stored_medicine/constantly_stored_medicine.module';
import { EmailService } from './email/email.service';
import { ScheduleModule } from './schedule/schedule.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

import typeOrmConfig from '../ormconfig';

@Module({
  imports: [
    NestScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`],
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    CategoryModule,
    MedicineModule,
    ConstantlyStoredMedicineModule,
    NestScheduleModule,
    ScheduleModule,
    AuthModule,
    UserModule
  ],
  controllers: [],
  providers: [EmailService, JwtService],
})
export class AppModule {}
