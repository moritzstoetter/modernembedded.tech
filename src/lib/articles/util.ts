import { getCollection } from "astro:content";
import { isBefore } from "date-fns";
import type { BlogPost } from "../../content/config";
import { idIsOfLanguage } from "../../i18n/utils";

export const findBlogpostsByTags = async (
  lang: "de" | "en",
  tags: string[],
): Promise<BlogPost[]> => {
  const blogPosts = await getCollection("blog");

  // filter by language and tags and sort by date, pick first 3 max results
  return blogPosts
    .filter(
      (post) =>
        idIsOfLanguage(post.id, lang) &&
        tags.some((tag) => post.data.tags.includes(tag)),
    )
    .sort((a, b) =>
      isBefore(new Date(a.data.date), new Date(b.data.date)) ? 1 : -1,
    )
    .slice(0, 3)
    .map((post) => post.data);
};
