import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePartDto } from './dto/create-parts.dto';
import { Part } from './entities/parts.entity';

@Injectable()
export class PartsService {
  constructor(@InjectRepository(Part) private repo: Repository<Part>) {}

  create(dto: CreatePartDto) {
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find();
  }
}