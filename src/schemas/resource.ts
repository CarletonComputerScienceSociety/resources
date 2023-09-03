import { z } from "astro:content";

const ResourceSchema = z.object({
  title: z.string(),
  date: z.date(),
  short_answer: z.string().optional()
});

export { ResourceSchema };
