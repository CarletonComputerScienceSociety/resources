import { z } from 'astro:content';

const ResourceSchema = z.object({
    title: z.string(),
    date: z.date(),
});

export { ResourceSchema };