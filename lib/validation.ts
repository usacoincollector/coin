import { z } from 'zod';

const hasTwoDecimalPlaces = (value: number) => Math.abs(value * 100 - Math.round(value * 100)) < 1e-9;
const currencyAmount = z.number().nonnegative().refine(hasTwoDecimalPlaces, {
  message: 'Must have at most 2 decimal places.'
});

export const coinInputSchema = z.object({
  name: z.string().trim().min(1).max(120),
  year: z.number().int().min(1000).max(3000),
  mint_mark: z.string().trim().max(24).optional().or(z.literal('')),
  purchase_price: currencyAmount,
  estimated_value: currencyAmount.nullable().optional(),
  storage_location: z.string().trim().min(1).max(120),
  notes: z.string().trim().max(5000).optional().or(z.literal('')),
  image_urls: z.array(z.string().url()).max(3)
});

export type CoinInput = z.infer<typeof coinInputSchema>;
