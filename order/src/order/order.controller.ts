/* eslint-disable prettier/prettier */
import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import orders from 'src/constants/orders';

@Controller('order')
export class OrderController {
  @Get('/')
  async products() {
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'Orders fetched successfully',
      data: orders,
    };
  }

  @Get('/single/:id')
  async product(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'Order fetched successfully',
      data: orders.find((product) => product.id === Number(id)),
    };
  }
}
