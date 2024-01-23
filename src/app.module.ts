import {
  Module,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtService } from "@nestjs/jwt";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule as  NestScheduleModule } from '@nestjs/schedule';
import { configuration } from '../config/configuration';

import { CategoryModule } from './category/category.module';
import { MedicineModule } from './medicine/medicine.module';
import { ConstantlyStoredMedicineModule } from './constantly_stored_medicine/constantly_stored_medicine.module';
import { EmailService } from './email/email.service';
import { ScheduleModule } from './schedule/schedule.module';
import { AuthModule } from './auth/auth.module';
import { RecipientModule } from './recipient/recipient.module';
import { UserModule } from './user/user.module';
import typeorm from './typeOrm/config';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    NestScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/config/env/${ENV}.env`,
      load: [configuration, typeorm]
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      entities: [],
      autoLoadEntities: true,
      synchronize: false,
      "migrations": ["dist/migrations/*{.ts,.js}"],
      "migrationsTableName": "migrations_typeorm",
      "migrationsRun": true
    }),
    CategoryModule,
    MedicineModule,
    ConstantlyStoredMedicineModule,
    NestScheduleModule,
    ScheduleModule,
    AuthModule,
    RecipientModule,
    UserModule
  ],
  controllers: [],
  providers: [EmailService, JwtService],
})
export class AppModule {}
