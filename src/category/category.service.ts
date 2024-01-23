import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from "./dto/create-category.dto";

import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  
  async findAll(filter: any): Promise<Category[]> {
    const query = this.categoryRepository.createQueryBuilder('category');
  
    if (filter.name) {
      query.andWhere('category.name LIKE :name', { name: `%${filter.name.toLowerCase()}%` });
    }
    return await query.orderBy(`category.name`, "ASC").getMany();
  }

  async findOne(id: number) {
    return await this.categoryRepository.findOne({
      where: { id }
    });
  }
  
  async create(data: CreateCategoryDto) {
    const newCategory = await this.categoryRepository.create(data);
    
    return await this.categoryRepository.save(newCategory);
  }
  
  async remove(id: number) {
    const category = await this.findOne(id);
    await this.categoryRepository.remove(category);
  }
}
