import { IProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const { searchTerm } = query;

  if (searchTerm) {
    const productFieldPaths = ['name', 'description', 'category'];

    const queries = productFieldPaths.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    }));

    const result = await Product.find({ $or: queries });
    return result;
  } else {
    const result = await Product.find();
    return result;
  }
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

const deleteAProductFromDB = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getAProductFromDB,
  updateAProductFromDB,
  deleteAProductFromDB,
};
