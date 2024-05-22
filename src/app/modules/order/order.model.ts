import { Schema, model } from 'mongoose';
import { IOrder } from './order.interface';
import { Product } from '../product/product.model';
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';

const orderSchema = new Schema<IOrder>({
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
});

orderSchema.pre('save', async function (next) {
  const doesProductExist = await Product.findById(this.productId);

  if (!doesProductExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Invalid Product Id!');
  }
  
  next();
});

export const Order = model<IOrder>('Order', orderSchema);
