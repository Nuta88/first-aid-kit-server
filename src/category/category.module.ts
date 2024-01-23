import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicine } from '../medicine/entities/medicine.entity';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medicine, Category])],
  controllers: [CategoryController],
  providers: [CategoryService, JwtService],
})
export class CategoryModule {}
