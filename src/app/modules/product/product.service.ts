import { IProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getAProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateAProductFromDB = async (id: string, payload: IProduct) => {
  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getAProductFromDB,
  updateAProductFromDB,
};
