import { z } from 'zod';
import { protectedProcedure, router } from '../_core/trpc';
import { createOrder, getOrdersByUserId, getOrderById, updateOrderStatus } from '../db';

export const ordersRouter = router({
  create: protectedProcedure
    .input(
      z.object({
        totalAmount: z.string(),
        items: z.array(z.object({
          productId: z.number(),
          name: z.string(),
          price: z.string(),
          size: z.string(),
          quantity: z.number(),
        })),
        stripeCheckoutSessionId: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return createOrder({
        userId: ctx.user.id,
        totalAmount: input.totalAmount,
        items: input.items,
        customerEmail: ctx.user.email,
        customerName: ctx.user.name,
        stripeCheckoutSessionId: input.stripeCheckoutSessionId,
        status: 'pending',
      });
    }),

  list: protectedProcedure.query(async ({ ctx }) => {
    return getOrdersByUserId(ctx.user.id);
  }),

  getById: protectedProcedure
    .input(z.object({ orderId: z.number() }))
    .query(async ({ input, ctx }) => {
      const order = await getOrderById(input.orderId);
      if (order?.userId !== ctx.user.id) {
        throw new Error('Unauthorized');
      }
      return order;
    }),

  updateStatus: protectedProcedure
    .input(z.object({ orderId: z.number(), status: z.string() }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== 'admin') {
        throw new Error('Only admins can update order status');
      }
      return updateOrderStatus(input.orderId, input.status);
    }),
});
