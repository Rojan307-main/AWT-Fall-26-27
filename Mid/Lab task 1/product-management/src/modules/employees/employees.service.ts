import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "./entities/employee.entity";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee) private readonly repo: Repository<Employee>,
  ) {}

  create(dto: CreateEmployeeDto) {
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find({ order: { id: "ASC" } });
  }

  async findOne(id: number) {
    const employee = await this.repo.findOneBy({ id });
    if (!employee) throw new NotFoundException(`Employee ${id} not found`);
    return employee;
  }

  async update(id: number, dto: UpdateEmployeeDto) {
    const employee = await this.findOne(id);
    Object.assign(employee, dto);
    return this.repo.save(employee);
  }

  async remove(id: number) {
    const employee = await this.findOne(id);
    await this.repo.remove(employee);
    return { message: `Employee ${id} deleted successfully` };
  }
}
