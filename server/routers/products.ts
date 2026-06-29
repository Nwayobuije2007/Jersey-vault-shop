import { z } from 'zod';
import { publicProcedure, protectedProcedure, router } from '../_core/trpc';
import { getProducts, getProductById, createProduct } from '../db';

export const productsRouter = router({
  list: publicProcedure
    .input(
      z.object({
        team: z.string().optional(),
        league: z.string().optional(),
        featured: z.boolean().optional(),
      })
    )
    .query(async ({ input }) => {
      return getProducts(input);
    }),

  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      return getProductById(input.id);
    }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string().optional(),
        price: z.string(),
        team: z.string().optional(),
        league: z.string().optional(),
        season: z.string().optional(),
        imageUrl: z.string().optional(),
        sizes: z.array(z.string()).optional(),
        inStock: z.number().optional(),
        featured: z.number().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== 'admin') {
        throw new Error('Only admins can create products');
      }
      return createProduct(input);
    }),
});
