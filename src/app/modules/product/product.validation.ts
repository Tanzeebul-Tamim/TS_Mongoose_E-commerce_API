import { z } from 'zod';

const variantValidationSchema = z.object({
  type: z.string().min(1).max(20).trim(),
  value: z.string().min(1).max(20).trim(),
});

const inventoryValidationSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

const productValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(20).trim(),
    description: z.string().min(1).max(60).trim(),
    price: z.number(),
    category: z.string().min(1).max(20).trim(),
    tags: z.array(z.string().min(1).max(8)),
    variants: z.array(variantValidationSchema),
    inventory: inventoryValidationSchema,
  }),
});

export const ProductValidations = {
  productValidationSchema,
};
