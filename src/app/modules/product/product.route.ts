import express from 'express';
import { ProductControllers } from './product.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ProductValidations } from './product.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(ProductValidations.productValidationSchema),
  ProductControllers.createProduct,
);

router.get('/', ProductControllers.getAllProducts);

router.get('/:productId', ProductControllers.getAProduct);

router.put(
  '/:productId',
  validateRequest(ProductValidations.productValidationSchema),
  ProductControllers.updateAProduct,
);

router.delete('/:productId', ProductControllers.deleteAProduct);

export const ProductRoutes = router;
