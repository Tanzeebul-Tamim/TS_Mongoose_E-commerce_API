import { z } from 'zod';

const variantValidationSchema = z.object({
  type: z
    .string()
    .min(1, { message: 'Type is required' })
    .max(20, { message: 'Type cannot exceed 20 characters' })
    .trim(),
  value: z
    .string()
    .min(1, { message: 'Value is required' })
    .max(20, { message: 'Value cannot exceed 20 characters' })
    .trim(),
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
      .max(100, { message: 'Description cannot exceed 100 characters' })
      .trim(),
    price: z.number(),
    category: z
      .string()
      .min(1, { message: 'Category is required' })
      .max(20, { message: 'Category cannot exceed 20 characters' })
      .trim(),
    tags: z.array(
      z.string().max(15, { message: 'Tags cannot exceed 15 characters' }).trim(),
    ),
    variants: z.array(variantValidationSchema),
    inventory: inventoryValidationSchema,
  }),
});

export const ProductValidations = {
  productValidationSchema,
};
