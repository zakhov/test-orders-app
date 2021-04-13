//blog-backend/src/orders/orders.controller.ts
import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Post,
  Body,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dto/create-order.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  // Submit an order
  @Post('/order')
  async addOrder(@Res() res, @Body() createOrderDTO: CreateOrderDTO) {
    const newOrder = await this.ordersService.addOrder(createOrderDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Order has been submitted successfully!',
      order: newOrder,
    });
  }

  // Fetch a particular order using ID
  @Get('order/:orderID')
  async getPost(@Res() res, @Param('orderID', new ValidateObjectId()) orderID) {
    const order = await this.ordersService.getOrder(orderID);
    if (!order) {
      throw new NotFoundException('Order does not exist!');
    }
    return res.status(HttpStatus.OK).json(order);
  }

  // Fetch all posts
  @Get('orders')
  async getOrders(@Res() res) {
    const orders = await this.ordersService.getOrders();
    return res.status(HttpStatus.OK).json(orders);
  }
}
