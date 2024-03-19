import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

import { UserService } from '../user/user.service';
import { CreateUserDto } from "../user/dto/create-user.dto";

type JwtPayload = {
  sub: string;
  email: string;
};

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
 secret = this.configService.get<string>('JWT_SECRET_KEY');
 refreshSecret = this.configService.get<string>('JWT_REFRESH_SECRET_KEY');
 
 async signup(data: CreateUserDto) {
   await this.isUserExist(data);
  
   const hash = await this.hashData(data.password);
   const user = await this.usersService.create({...data, password: hash });
   const tokens = await this.getTokens(user.id, user.email);
  
   return {...tokens, user };
 }
  
  async signin(email: string, pass: string): Promise<any> {
    const user = await this.validateUser(email, pass);
    const tokens = await this.getTokens(user.id, user.email);
    
    return {...tokens, user};
  }
  async isUserExist(data: CreateUserDto) {
    const user = await this.usersService.findByEmail(data.email);
    
    if (user) {
      throw new BadRequestException('User already exists');
    }
  }
  
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    const passwordMatches = await argon2.verify(user.password, pass);
  
    if (!user) throw new BadRequestException('User does not exist');
  
  
    if (!passwordMatches) throw new UnauthorizedException();
    
    return user;
  }
  
  async generateToken(payload, secret,expiresIn='10m') {
    return await this.jwtService.signAsync(payload,
      {
        secret,
        algorithm: 'HS256',
        expiresIn,
      },
    )
  }
  
  hashData(data: string) {
    return argon2.hash(data);
  }
  async getTokens(userId: number, email: string) {
    const payload = {
      sub: userId,
      email,
    };
    
    const [access_token, refresh_token] = await Promise.all([
      this.generateToken(payload, this.secret, '15m'),
      this.generateToken(payload, this.refreshSecret, '7d'),
    ]);
  
    return {
      access_token,
      refresh_token,
    };
  }
  
  async refreshToken(userId: number, refresh_token: string) {
    const user = await this.usersService.findById(userId);
    if (!user) throw new ForbiddenException('Access Denied');
    
    const payload = {
      sub: user.id,
      email: user.email,
    };
    
    const access_token = await this.generateToken(payload, this.secret, '1m');
    return {
      access_token,
      refresh_token,
    };
  }
}
