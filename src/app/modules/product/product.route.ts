import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/', ProductControllers.createProduct);
router.get('/', ProductControllers.getAllProducts);
router.get('/:productId', ProductControllers.getAProduct);
router.put('/:productId', ProductControllers.updateAProduct);

export const ProductRoutes = router;
