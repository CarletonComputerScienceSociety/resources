import { reference, z } from "astro:content";

const ResourceSchema = z.object({
  title: z.string(),
  date: z.date(),
  short_answer: z.string().optional(),
  topic: reference("topics"),
});

export { ResourceSchema };
