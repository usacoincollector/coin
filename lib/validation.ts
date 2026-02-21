import { z } from 'zod';

export const coinInputSchema = z.object({
  name: z.string().trim().min(1).max(120),
  year: z.number().int().min(1000).max(3000),
  mint_mark: z.string().trim().max(24).optional().or(z.literal('')),
  purchase_price: z.number().nonnegative(),
  estimated_value: z.number().nonnegative().nullable().optional(),
  storage_location: z.string().trim().min(1).max(120),
  notes: z.string().trim().max(5000).optional().or(z.literal('')),
  image_urls: z.array(z.string().url()).max(3)
});

export type CoinInput = z.infer<typeof coinInputSchema>;
