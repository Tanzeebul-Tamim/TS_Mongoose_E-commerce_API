import { Schema, model } from 'mongoose';
import { IInventory, IProduct, IVariant } from './product.interface';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const variantSchema = new Schema<IVariant>({
  type: { type: String, required: [true, 'Type is a required field'] },
  value: { type: String, required: [true, 'Value is a required field'] },
});

const inventorySchema = new Schema<IInventory>({
  quantity: { type: Number, required: [true, 'Quantity is a required field'] },
  inStock: { type: Boolean, required: [true, 'InStock is a required field'] },
});

const productSchema = new Schema<IProduct>({
  name: { type: String, required: [true, 'Name is a required field'] },
  description: {
    type: String,
    required: [true, 'Description is a required field'],
  },
  price: { type: Number, required: [true, 'Price is a required field'] },
  category: {
    type: String,
    required: [true, 'Category is a required field'],
  },
  tags: { type: [String], required: [true, 'Tags are a required'] },
  variants: {
    type: [variantSchema],
    required: [true, 'Variants are required'],
  },
  inventory: {
    type: inventorySchema,
    required: [true, 'Inventory is a required field'],
  },
});

productSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const doesProductExist = await Product.findOne(query);

  if (!doesProductExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found!');
  }

  next();
});

export const Product = model<IProduct>('Product', productSchema);
