import { router, publicProcedure } from "../_core/trpc";
import { z } from "zod";

export const contactRouter = router({
  // Submit a contact form
  submitForm: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
        subject: z.string().min(1),
        message: z.string().min(1),
      })
    )
    .mutation(async ({ input }) => {
      try {
        // TODO: Save contact form to database or send email notification
        console.log("Contact form submitted:", input);
        
        return {
          success: true,
          message: "Thank you for your message. We'll get back to you soon!",
        };
      } catch (error) {
        console.error("Contact form error:", error);
        throw error;
      }
    }),
});
