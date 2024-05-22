import { z } from 'zod';

const orderValidationSchema = z.object({
  body: z.object({
    email: z.string().email().min(1).trim(),
    productId: z.string().trim(),
    price: z.number(),
    quantity: z.number(),
  }),
});

export const OrderValidations = {
  orderValidationSchema,
};
