import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose'; // add this
import { OrdersSchema } from './schemas/orders.schema'; // and this

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: OrdersSchema }]),
  ], // add
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
