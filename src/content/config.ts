import { z, defineCollection } from "astro:content";

const portfolioCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema:
    //z.array(
    z.object({
      title: z.string(),
      nda: z.boolean(),
      picture: z.string(),
      role: z.string(),
      collaborators: z.array(z.string()),
      techStack: z.array(z.string()),
      description: z.string(),
    }),
  // ),
});

export const collections = {
  portfolio: portfolioCollection,
};
