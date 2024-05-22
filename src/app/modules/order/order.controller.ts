import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { OrderServices } from './order.service';
import AppError from '../../errors/AppError';

const createOrder = catchAsync(async (req, res) => {
  const result = await OrderServices.createOrderIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully!',
    data: result,
  });
});

const getAllOrders = catchAsync(async (req, res) => {
  const { query } = req;
  const result = await OrderServices.getAllOrdersFromDB(query);

  if (result.length > 0) {
    if (query.email) {
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      });
    } else {
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }
  } else {
    throw new AppError(httpStatus.NOT_FOUND, 'Orders not found!');
  }
});

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
