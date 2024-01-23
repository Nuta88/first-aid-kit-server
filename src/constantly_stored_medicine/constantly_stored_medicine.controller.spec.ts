import { Test, TestingModule } from '@nestjs/testing';
import { ConstantlyStoredMedicineController } from './constantly_stored_medicine.controller';
import { ConstantlyStoredMedicineService } from './constantly_stored_medicine.service';

describe('ConstantlyStoredMedicineController', () => {
  let controller: ConstantlyStoredMedicineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConstantlyStoredMedicineController],
      providers: [ConstantlyStoredMedicineService],
    }).compile();

    controller = module.get<ConstantlyStoredMedicineController>(ConstantlyStoredMedicineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
