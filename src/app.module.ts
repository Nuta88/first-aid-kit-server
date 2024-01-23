import { Module, } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from "@nestjs/jwt";
import { ScheduleModule as NestScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from '../config/configuration';

import { CategoryModule } from './category/category.module';
import { EmailService } from './email/email.service';
import { MedicineModule } from './medicine/medicine.module';
import { UserModule } from './user/user.module';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    NestScheduleModule.forRoot(),
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/config/env/${ENV}.env`,
      load: [configuration] ,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DATABASE,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: 'root',
      password: 'secret',
      entities: [],
      autoLoadEntities: true,
      synchronize: false,
    }),
    CategoryModule,
    MedicineModule,
    UserModule
  ],
  controllers: [],
  providers: [EmailService, JwtService],
})
export class AppModule {}
