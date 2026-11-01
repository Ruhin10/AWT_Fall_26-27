import { Controller, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { Body } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';


@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body(ValidationPipe) dto: CreateUserDto) {
        return await this.userService.createUser(dto);
    }
}
