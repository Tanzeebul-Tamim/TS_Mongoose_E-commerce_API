import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductServices } from './product.service';
import httpStatus from 'http-status';

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product created successfully!',
    data: result,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const { query } = req;
  const result = await ProductServices.getAllProductsFromDB(query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products fetched successfully!',
    data: result,
  });
});

const getAProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await ProductServices.getAProductFromDB(productId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product fetched successfully!',
    data: result,
  });
});

const updateAProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const payload = req.body;
  const result = await ProductServices.updateAProductFromDB(productId, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product updated successfully!',
    data: result,
  });
});

const deleteAProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  await ProductServices.deleteAProductFromDB(productId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product deleted successfully',
    data: null,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getAProduct,
  updateAProduct,
  deleteAProduct,
};
