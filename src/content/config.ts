import { defineCollection } from 'astro:content';
import { EventSchema, ResourceSchema } from '../schemas';

const eventsCollection = defineCollection({
    type: 'content',
    schema: EventSchema,
});

const resourcesCollection = defineCollection({
  type: 'content',
  schema: ResourceSchema,
});

export const collections = {
  'events': eventsCollection,
  'resources': resourcesCollection,
};