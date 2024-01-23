import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards
} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { RefreshTokenGuard } from './guards/refresh_token.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  
  @Post('signup')
  signup(@Body() data: CreateUserDto) {
    return this.authService.signUp(data);
  }
  
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() data: AuthDto) {
    return this.authService.signin(data.email, data.password);
  }
  
  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  refreshTokens(@Req() req: Request) {
    const userId = req.user['sub'];
    const token = req.user['token'];
  
    return this.authService.refreshToken(userId, token as string);
  }
}
