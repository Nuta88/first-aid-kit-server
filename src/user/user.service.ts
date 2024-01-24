import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

export type User = any;

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
      where: [
        { email },
      ]
    });
  }
  
  async findById(id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: { id }
    });
  }
  
  async create(data: CreateUserDto): Promise<User> {
    const user = await this.userRepository.create(data);
    
    return await this.userRepository.save(user);
  }
}
