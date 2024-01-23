import { Test, TestingModule } from '@nestjs/testing';
import { ConstantlyStoredMedicineService } from './constantly_stored_medicine.service';

describe('ConstantlyStoredMedicineService', () => {
  let service: ConstantlyStoredMedicineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConstantlyStoredMedicineService],
    }).compile();

    service = module.get<ConstantlyStoredMedicineService>(ConstantlyStoredMedicineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
