import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private readonly repo: Repository<Product>,
  ) {}

  create(dto: CreateProductDto) {
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find({ order: { id: "ASC" } });
  }

  async findOne(id: number) {
    const product = await this.repo.findOneBy({ id });
    if (!product) throw new NotFoundException(`Product ${id} not found`);
    return product;
  }

  async update(id: number, dto: UpdateProductDto) {
    const product = await this.findOne(id);
    Object.assign(product, dto);
    return this.repo.save(product);
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    await this.repo.remove(product);
    return { message: `Product ${id} deleted successfully` };
  }
}
