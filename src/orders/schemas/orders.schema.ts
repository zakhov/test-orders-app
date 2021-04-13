// blog-backend/src/orders/schemas/orders.schema.ts
import * as mongoose from 'mongoose';

export const OrdersSchema = new mongoose.Schema({
  name: String,
  payment: String,
  status: String,
  date_created: String,
});
