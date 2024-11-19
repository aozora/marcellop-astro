import { z, defineCollection } from "astro:content";

const portfolioCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    nda: z.boolean(),
    picture: z.string(),
    role: z.string(),
    collaborators: z.array(z.string()),
    "tech-stack": z.array(z.string()),
    description: z.string(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  portfolio: portfolioCollection,
};
