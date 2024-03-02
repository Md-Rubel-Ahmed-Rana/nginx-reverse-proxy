/* eslint-disable prettier/prettier */
import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import users from 'src/constants/users';

@Controller('user')
export class UserController {
  @Get('/')
  async users() {
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'Users fetched successfully',
      data: users,
    };
  }

  @Get('/single/:id')
  async user(@Param('id') id: number) {
    const user = users.find((user) => user.id === Number(id));
    if (!user) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        success: false,
        message: 'User not found',
        data: user,
      };
    } else {
      return {
        statusCode: HttpStatus.OK,
        success: true,
        message: 'User fetched successfully',
        data: user,
      };
    }
  }

  @Get('/register')
  async register() {
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'User registered successfully',
      data: null,
    };
  }
}
