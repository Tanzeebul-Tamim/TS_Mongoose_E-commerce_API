import express from 'express';
import { OrderControllers } from './order.controller';
import validateRequest from '../../middlewares/validateRequest';
import { OrderValidations } from './order.validations';

const router = express.Router();

router.post(
  '/',
  validateRequest(OrderValidations.orderValidationSchema),
  OrderControllers.createOrder,
);

router.get('/', OrderControllers.getAllOrders);

export const OrderRoutes = router;
