/* eslint-disable prettier/prettier */
import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import items from 'src/constants/items';

@Controller('item')
export class ItemController {
  @Get('/')
  async getItems() {
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'Cart Items fetched successfully',
      data: items,
    };
  }

  @Get('/single/:id')
  async getItem(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'Single Item fetched successfully',
      data: items.find((item) => item.id === Number(id)),
    };
  }

  @Get('/myItems/:userId')
  async myItems(@Param('userId') userId: number) {
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'My Items fetched successfully',
      data: items.filter((item) => item.userId === Number(userId)),
    };
  }
}
