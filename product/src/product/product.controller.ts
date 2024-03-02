/* eslint-disable prettier/prettier */
import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import products from 'src/constants/products';

@Controller('product')
export class ProductController {
  @Get('/')
  async products() {
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'Products fetched successfully',
      data: products,
    };
  }

  @Get('/single/:id')
  async product(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'Product fetched successfully',
      data: products.find((product) => product.id === Number(id)),
    };
  }
}
