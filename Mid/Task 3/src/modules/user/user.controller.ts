import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Post("register")
  register(@Body() dto: CreateUserDto) {
    return this.usersService.register(dto);
  }
}