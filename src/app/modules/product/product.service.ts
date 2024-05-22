import { IProduct, TQuery } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const { searchTerm } = query;
  
  if (searchTerm) {
    const productFieldPaths = [
      'name',
      'description',
      'price',
      'category',
      'tags',
      'variants.type',
      'variants.value',
      'inventory.inStock',
    ];

    const queries: TQuery[] = productFieldPaths.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    }));

    if (searchTerm === 'true') {
      queries[7] = { 'inventory.inStock': true };
    } else if (searchTerm === 'false') {
      queries[7] = { 'inventory.inStock': false };
    }

    const searchQuery = [
      { $unwind: '$tags' },
      { $unwind: '$variants' },
      {
        $match: {
          $or: queries,
        },
      },
      {
        $group: {
          _id: '$_id',
          name: { $first: '$name' },
          description: { $first: '$description' },
          price: { $first: '$price' },
          category: { $first: '$category' },
          tags: { $addToSet: '$tags' },
          variants: {
            $addToSet: {
              type: '$variants.type',
              value: '$variants.value',
            },
          },
          inventory: { $first: '$inventory' },
        },
      },
    ];

    const result = await Product.aggregate(searchQuery);
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
