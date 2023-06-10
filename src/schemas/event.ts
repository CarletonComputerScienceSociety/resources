import { z } from 'astro:content';

const EventSchema = z.object({
    title: z.string(),
    date: z.date(),
});

export { EventSchema };