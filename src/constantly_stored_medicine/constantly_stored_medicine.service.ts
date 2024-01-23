import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Repository
} from 'typeorm';
import { Medicine } from '../medicine/entities/medicine.entity';
import { MedicineService } from '../medicine/medicine.service';
import { CreateConstantlyStoredMedicineDto } from './dto/create-constantly_stored_medicine.dto';
import { UpdateConstantlyStoredMedicineDto } from './dto/update-constantly_stored_medicine.dto';
import { ConstantlyStoredMedicine } from './entities/constantly_stored_medicine.entity';
import { TConstantlyStoredMedicine } from "./types/constantly_stored_medicine";

@Injectable()
export class ConstantlyStoredMedicineService {
  constructor(
    private readonly medicineService: MedicineService,
    @InjectRepository(Medicine)
    private medicineRepository: Repository<Medicine>,
    @InjectRepository(ConstantlyStoredMedicine)
    private constantlyStoredMedicineRepository: Repository<ConstantlyStoredMedicine>,
  ) {}
  async create(medicine: CreateConstantlyStoredMedicineDto): Promise<ConstantlyStoredMedicine> {
    const newMedicine = await this.constantlyStoredMedicineRepository.create(medicine);
    return await this.constantlyStoredMedicineRepository.save(newMedicine);
  }
  async update(id: number, data: UpdateConstantlyStoredMedicineDto): Promise<ConstantlyStoredMedicine> {
    await this.constantlyStoredMedicineRepository.save(data);
    
    return await this.constantlyStoredMedicineRepository.findOneBy({ id } );
  }
  async findAll(): Promise<TConstantlyStoredMedicine[]> {
    const csm = await this.constantlyStoredMedicineRepository.find({order: { name: "ASC" }});
    const medicines = await this.medicineService.findAll({});

    return csm.map(item => ({
      ...item,
      isMissing:!medicines.some(m => (m.name === item.name) && (m.description === item.description))
    })).sort(this.compareMedicine);
  }

  async findOne(id: number): Promise<ConstantlyStoredMedicine> {
    return await this.constantlyStoredMedicineRepository.findOne({
      where: { id }
    });
  }

  async remove(id: number) {
    const medicine = await this.findOne(id);
    await this.constantlyStoredMedicineRepository.remove(medicine);
  }
  
  compareMedicine(a) {
    if (a.isMissing ) return -1;
    return 0;
  }
}
