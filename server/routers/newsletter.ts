import { z } from 'zod';
import { publicProcedure, router } from '../_core/trpc';
import { subscribeNewsletter, unsubscribeNewsletter } from '../db';

export const newsletterRouter = router({
  subscribe: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input }) => {
      return subscribeNewsletter(input.email);
    }),

  unsubscribe: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input }) => {
      return unsubscribeNewsletter(input.email);
    }),
});
