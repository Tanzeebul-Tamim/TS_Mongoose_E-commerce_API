import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (payload: IOrder) => {
  const result = await Order.create(payload);
  return result;
};

const getAllOrdersFromDB = async (query: Record<string, unknown>) => {
  const { email } = query;

  if (email) {
    const result = await Order.find({ email });
    return result;
  } else {
    const result = await Order.find();
    return result;
  }
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
};
