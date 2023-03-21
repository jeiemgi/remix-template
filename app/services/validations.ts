import { z } from "zod";

export const CreatePost = z.object({
  title: z.string().optional(),
  content: z.string().min(1),
});
