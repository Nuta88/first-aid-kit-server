import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { MedicineService } from './medicine.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';

@Controller('medicine')
export class MedicineController {
  constructor(private readonly medicineService: MedicineService) {}
  
  @UseGuards(AuthGuard)
  @Get()
  findAll(@Query() filter: any) {
    return this.medicineService.findAll(filter);
  }
  
  @UseGuards(AuthGuard)
  @Get('expired')
  findExpired(@Query() filter: any) {
    return this.medicineService.findExpired(filter);
  }
  
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() data: CreateMedicineDto) {
    return this.medicineService.create(data);
  }
  
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateMedicineDto) {
    return this.medicineService.update(id, data);
  }
  
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicineService.remove(id);
  }
}
