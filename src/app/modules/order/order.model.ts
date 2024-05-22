import { Schema, model } from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new Schema<IOrder>(
  {
    email: { type: String, required: [true, 'Email is a required field'] },
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Product Id is a required field'],
    },
    price: { type: Number, required: [true, 'Price is a required field'] },
    quantity: {
      type: Number,
      required: [true, 'Quantity is a required field'],
    },
  }
);

export const Order = model<IOrder>('Order', orderSchema);
