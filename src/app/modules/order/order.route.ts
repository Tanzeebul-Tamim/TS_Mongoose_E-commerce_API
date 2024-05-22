import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post('/', OrderControllers.createOrder);
router.get('/', OrderControllers.getAllOrders);
router.get('/:userEmail', OrderControllers.getAllOrdersOfAnUser);

export const OrderRoutes = router;
