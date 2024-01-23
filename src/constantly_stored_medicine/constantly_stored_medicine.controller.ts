import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ConstantlyStoredMedicineService } from './constantly_stored_medicine.service';
import { CreateConstantlyStoredMedicineDto } from './dto/create-constantly_stored_medicine.dto';
import { UpdateConstantlyStoredMedicineDto } from './dto/update-constantly_stored_medicine.dto';

@Controller('constantly-stored-medicine')
export class ConstantlyStoredMedicineController {
  constructor(private readonly constantlyStoredMedicineService: ConstantlyStoredMedicineService) {}
  
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createConstantlyStoredMedicineDto: CreateConstantlyStoredMedicineDto) {
    return this.constantlyStoredMedicineService.create(createConstantlyStoredMedicineDto);
  }
  
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() data: UpdateConstantlyStoredMedicineDto) {
    return this.constantlyStoredMedicineService.update(id, data);
  }
  
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.constantlyStoredMedicineService.findAll();
  }
  
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.constantlyStoredMedicineService.findOne(id);
  }
  
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.constantlyStoredMedicineService.remove(id);
  }
}
