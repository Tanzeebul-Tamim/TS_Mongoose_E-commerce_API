import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { OrderServices } from './order.service';

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

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders fetched successfully!',
    data: result,
  });
});

const getAllOrdersOfAnUser = catchAsync(async (req, res) => {
  const { userEmail } = req.params;
  const result = await OrderServices.getAllOrdersOfAnUserFromDB(userEmail);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders fetched successfully for user email!',
    data: result,
  });
});

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getAllOrdersOfAnUser,
};
