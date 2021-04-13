// /blog-backend/src/orders/orders.service.ts
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './interfaces/order.interface';
import { CreateOrderDTO } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
  ) {}

  async addOrder(createOrderDTO: CreateOrderDTO): Promise<Order> {
    const newOrder = await new this.orderModel(createOrderDTO);
    return newOrder.save();
  }

  async getOrder(orderID): Promise<Order> {
    const order = await this.orderModel.findById(orderID).exec();
    return order;
  }

  async getOrders(): Promise<Order[]> {
    const orders = await this.orderModel.find().exec();
    return orders;
  }

  async editOrder(orderID, createOrderDTO: CreateOrderDTO): Promise<Order> {
    const editedOrder = await this.orderModel.findByIdAndUpdate(
      orderID,
      createOrderDTO,
      { new: true },
    );
    return editedOrder;
  }

  async deleteOrder(orderID): Promise<any> {
    const deletedOrder = await this.orderModel.findByIdAndRemove(orderID);
    return deletedOrder;
  }
}
