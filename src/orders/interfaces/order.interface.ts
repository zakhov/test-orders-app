import { Document } from 'mongoose';

export interface Order extends Document {
  readonly name: string;
  readonly payment: string;
  readonly status: string;
  readonly date_created: string;
}
