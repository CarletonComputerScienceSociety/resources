import { z } from "astro:content";

const TopicSchema = z.object({
  name: z.string(),
  icon: z.string(),
  color: z.string(),
  tag: z.string(),
});

export { TopicSchema };
