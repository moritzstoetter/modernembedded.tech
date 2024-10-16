import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
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
  type: "data",
  schema: z.object({
    members: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        image: z.string(),
      }),
    ),
  }),
});

const caseStudiesCollection = defineCollection({
  type: "data",
  schema: z.object({
    caseStudies: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        about: z.string(),
        challenge: z.string(),
        deliveredValue: z.string(),
        product: z.string(),
        tech: z.array(z.string()),
        testimonials: z.array(z.number()),
      }),
    ),
  }),
});

const servicesCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      services: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          tech: z.array(
            z.object({
              name: z.string(),
              description: z.string(),
              experience: z.string(),
            }),
          ),
          image: image(),
          tags: z.array(z.string()),
        }),
      ),
    }),
});

const testimonialsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      testimonials: z.array(
        z.object({
          identifier: z.number(),
          name: z.string(),
          quote: z.string(),
          image: image(),
        }),
      ),
    }),
});

export const collections = {
  blog: blogCollection,
  about: aboutCollection,
  "case-studies": caseStudiesCollection,
  services: servicesCollection,
  testimonials: testimonialsCollection,
};
