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
    name: z
      .string()
      .min(1, { message: 'Name is required' })
      .max(20, { message: 'Name cannot exceed 20 characters' })
      .trim(),
    description: z
      .string()
      .min(1, { message: 'Description is required' })
      .max(60, { message: 'Description cannot exceed 60 characters' })
      .trim(),
    price: z.number(),
    category: z
      .string()
      .min(1, { message: 'Category is required' })
      .max(20, { message: 'Category cannot exceed 20 characters' })
      .trim(),
    tags: z.array(
      z.string().max(8, { message: 'Tag cannot exceed 20 characters' }).trim(),
    ),
    variants: z.array(variantValidationSchema),
    inventory: inventoryValidationSchema,
  }),
});

export const ProductValidations = {
  productValidationSchema,
};
