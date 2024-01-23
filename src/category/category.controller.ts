import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from "../auth/guards/auth.guard";
import { CategoryService } from './category.service';
import { CreateCategoryDto } from "./dto/create-category.dto";

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  
  @Get()
  findAll(@Query() filter: any) {
    return this.categoryService.findAll(filter);
  }
  
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }
  
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() data: CreateCategoryDto) {
    return this.categoryService.create(data);
  }
  
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.categoryService.remove(id);
  }
}
