import { Types } from 'mongoose';

export interface IOrder {
  email: string;
  productId: Types.ObjectId;
  price: number;
  quantity: number;
}
