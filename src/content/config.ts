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

export interface BlogPost {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
    format: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg" | "avif";
  };
  imageAlt: string;
  author: string;
  date: Date;
}

const aboutCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      members: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
          image: image(),
        }),
      ),
    }),
});

export interface About {
  members: {
    name: string;
    description: string;
    image: {
      src: string;
      width: number;
      height: number;
      format: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg" | "avif";
    };
  }[];
}

const caseStudiesCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    about: z.string(),
    challenge: z.string(),
    deliveredValue: z.string(),
    product: z.string(),
    tech: z.array(z.string()),
    testimonials: z.array(z.number()),
  }),
});

export interface CaseStudy {
  title: string;
  description: string;
  about: string;
  challenge: string;
  deliveredValue: string;
  product: string;
  tech: string[];
  testimonials: number[];
}

const servicesCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      slug: z.string(),
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
});

export interface Service {
  slug: string;
  title: string;
  description: string;
  tech: {
    name: string;
    description: string;
    experience: string;
  }[];
  image: {
    src: string;
    width: number;
    height: number;
    format: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg" | "avif";
  };
  tags: string[];
}

const testimonialsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      identifier: z.number(),
      name: z.string(),
      quote: z.string(),
      image: image(),
    }),
});

export interface Testimonial {
  identifier: number;
  name: string;
  quote: string;
  image: {
    src: string;
    width: number;
    height: number;
    format: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg" | "avif";
  };
}

export const collections = {
  blog: blogCollection,
  about: aboutCollection,
  "case-studies": caseStudiesCollection,
  services: servicesCollection,
  testimonials: testimonialsCollection,
};
