import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Repository
} from 'typeorm';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { Medicine } from './entities/medicine.entity';

@Injectable()
export class MedicineService {
  constructor(
    @InjectRepository(Medicine)
    private medicineRepository: Repository<Medicine>,
  ) {}
  async create(medicine: CreateMedicineDto) {
    const newMedicine = await this.medicineRepository.create(medicine);
    const createdMedicine = await this.medicineRepository.save(newMedicine);

  
    return createdMedicine;
  }

  async findAll(filter: any): Promise<Medicine[]> {
    const query = this.medicineRepository.createQueryBuilder('medicine')
      .leftJoinAndSelect('medicine.categories', 'categories');
  
    if (filter.categories) {
      query.andWhere('categories.id IN (:...ids)', { ids: filter.categories.split(',').map(Number) });
    }
    
    if (filter.name) {
      query.andWhere('medicine.name LIKE :name', { name: `%${filter.name.toLowerCase()}%` });
    }

    return await query
      .andWhere('medicine.expiration_date > :currentDate', { currentDate: new Date().toISOString() })
      .orderBy(`medicine.expiration_date`, "ASC")
      .getMany();
  }

  async findExpired(filter: any): Promise<Medicine[]> {
    const query = this.medicineRepository.createQueryBuilder('medicine')
      .leftJoinAndSelect('medicine.categories', 'categories');
  
    if (filter.categories) {
      query.andWhere('categories.id IN (:...ids)', { ids: filter.categories.split(',').map(Number) });
    }
  
    if (filter.name) {
      query.andWhere('medicine.name LIKE :name', { name: `%${filter.name.toLowerCase()}%` });
    }
  
    return await query
      .andWhere('medicine.expiration_date <= :currentDate', { currentDate: new Date().toISOString() })
      .orderBy(`medicine.expiration_date`, "ASC")
      .getMany();
  }
  
  async findById(id: string): Promise<Medicine> {
    return await this.medicineRepository.findOne({
      where: { id },
    });
  }

  async update(id: string, data: UpdateMedicineDto) {
    await this.medicineRepository.save(data);
  
    return await this.medicineRepository.findOneBy({ id } );
  }

  async remove(id: string) {
    const medicine = await this.findById(id);
    await this.medicineRepository.remove(medicine);
  }
}
