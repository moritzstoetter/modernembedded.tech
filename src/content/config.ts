import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      imageAlt: z.string(),
      author: z.string(),
      date: z.date(),
    }),
});

const aboutCollection = defineCollection({
  schema: z.object({
    members: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        image: z.string(),
      })
    ),
  }),
});

const caseStudiesCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      about: z.string(),
      challenge: z.string(),
      deliveredValue: z.string(),
      product: z.string(),
      tech: z.array(z.string()),
      testimonials: z.array(
        z.object({
          name: z.string(),
          image: image(),
          quote: z.string(),
        })
      ),
    }),
});

const servicesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        experience: z.string(),
      })
    ),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
  about: aboutCollection,
  caseStudies: caseStudiesCollection,
  services: servicesCollection,
};
