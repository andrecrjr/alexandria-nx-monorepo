import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './User.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.usersService.create(data);
  }
}
