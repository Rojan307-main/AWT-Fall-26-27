import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto, } from "./dto/user.dto";


@Injectable()
export class UserService {
constructor(
  @InjectRepository(User) private readonly userRepository: Repository<User>,
) {}

async getUsers() {
try {
  const users = await this.userRepository.find();
  return users;}
  catch (error) {
    throw error;
}
}

async register(dto: CreateUserDto) {
    try {
      const response = this.userRepository.create(dto);
      const user = await this.userRepository.save(response);
      
      return {
        message: "User registered successfully.",
        user: {
          id: user.id,
          fullName: user.fullName,
          email: user.email,
          age: user.age,
          accountType: user.accountType,
        },
      };
    } catch (error) {
      throw error;
    }
  }
}