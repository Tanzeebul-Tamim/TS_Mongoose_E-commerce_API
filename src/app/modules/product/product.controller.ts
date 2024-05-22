import AppError from '../../errors/AppError';
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

  if (result.length > 0) {
    if (query.searchTerm) {
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Products matching search term '${query.searchTerm}' fetched successfully!`,
        data: result,
      });
    } else {
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
    }
  } else {
    throw new AppError(httpStatus.NOT_FOUND, 'No products found!');
  }
});

const getAProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await ProductServices.getAProductFromDB(productId);

  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } else {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found!');
  }
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
  const result = await ProductServices.deleteAProductFromDB(productId);

  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } else {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found!');
  }
});

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getAProduct,
  updateAProduct,
  deleteAProduct,
};
