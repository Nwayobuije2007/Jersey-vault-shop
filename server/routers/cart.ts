import { z } from 'zod';
import { protectedProcedure, router } from '../_core/trpc';
import { getCartItems, addToCart, removeFromCart, updateCartItem, getProductById } from '../db';

export const cartRouter = router({
  getItems: protectedProcedure.query(async ({ ctx }) => {
    const items = await getCartItems(ctx.user.id);
    const enriched = await Promise.all(
      items.map(async (item: any) => {
        const product = await getProductById(item.productId);
        return {
          ...item,
          product,
        };
      })
    );
    return enriched;
  }),

  addItem: protectedProcedure
    .input(
      z.object({
        productId: z.number(),
        size: z.string(),
        quantity: z.number().default(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return addToCart(ctx.user.id, input.productId, input.size, input.quantity);
    }),

  removeItem: protectedProcedure
    .input(z.object({ cartItemId: z.number() }))
    .mutation(async ({ input }) => {
      return removeFromCart(input.cartItemId);
    }),

  updateQuantity: protectedProcedure
    .input(
      z.object({
        cartItemId: z.number(),
        quantity: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      return updateCartItem(input.cartItemId, input.quantity);
    }),
});
