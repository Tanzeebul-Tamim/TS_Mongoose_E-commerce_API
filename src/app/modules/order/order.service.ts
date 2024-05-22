import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (payload: IOrder) => {
  const result = await Order.create(payload);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await Order.find();
  return result;
};

const getAllOrdersOfAnUserFromDB = async (email: string) => {
  const result = await Order.find({ email });
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  getAllOrdersOfAnUserFromDB,
};
