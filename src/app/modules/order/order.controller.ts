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
  const result = await OrderServices.getAllOrdersFromDB();

  if (result.length > 0) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } else {
    throw new AppError(httpStatus.NOT_FOUND, 'No orders found!');
  }
});

const getAllOrdersOfAnUser = catchAsync(async (req, res) => {
  const { userEmail } = req.params;
  const result = await OrderServices.getAllOrdersOfAnUserFromDB(userEmail);

  if (result.length > 0) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Orders fetched successfully for user email!',
      data: result,
    });
  } else {
    throw new AppError(httpStatus.NOT_FOUND, 'No orders found for user!');
  }
});

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getAllOrdersOfAnUser,
};
