import { Body, Controller, Get, Post } from '@nestjs/common';
import { PartsService } from './parts.service';
import { CreatePartDto } from './dto/create-parts.dto';

@Controller('parts')
export class PartsController {
  constructor(private readonly partsService: PartsService) {}

  @Post()
  create(@Body() dto: CreatePartDto) {
    return this.partsService.create(dto);
  }

  @Get()
  findAll() {
    return this.partsService.findAll();
  }
}