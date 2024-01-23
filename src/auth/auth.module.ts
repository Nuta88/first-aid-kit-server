import { Module } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "../user/user.service";
import { Account } from "../user/entities/user.entity";
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account]),
  ],
  controllers: [AuthController],
  providers: [
    UserService,
    AuthService,
    JwtService,
    ConfigService
  ]
})
export class AuthModule {}
