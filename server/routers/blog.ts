import { z } from 'zod';
import { publicProcedure, protectedProcedure, router } from '../_core/trpc';
import { getBlogPostBySlug, createBlogPost } from '../db';

export const blogRouter = router({
  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      return getBlogPostBySlug(input.slug);
    }),

  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        slug: z.string(),
        content: z.string(),
        excerpt: z.string().optional(),
        imageUrl: z.string().optional(),
        category: z.string().optional(),
        published: z.number().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== 'admin') {
        throw new Error('Only admins can create blog posts');
      }
      return createBlogPost(input);
    }),
});
