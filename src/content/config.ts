import { defineCollection } from "astro:content";
import { ResourceSchema, TopicSchema } from "../schemas";

const resourcesCollection = defineCollection({
  type: "content",
  schema: ResourceSchema,
});

const topicsCollection = defineCollection({
  type: "data",
  schema: TopicSchema,
});

export const collections = {
  resources: resourcesCollection,
  topics: topicsCollection,
};
