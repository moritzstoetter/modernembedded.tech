# Moritz's Website Documentation

This project is set up with Astro.build.

You can find a full documentation here: [https://docs.astro.build/en/getting-started/](https://docs.astro.build/en/getting-started/). At some points in this documentation it will also link to further documentation or specific points in the documentation to give you further context.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

> ⚠️ Sometimes VSCode is not reading new Astro collection types correctly. It then tells you something is broken. Before trying to fix it, run `npm run generate` once to re-generate the Astro collectiont types. Usually this fixes things again.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

See a detailed breakdown of Astro standard structure here: [https://docs.astro.build/en/basics/project-structure/](https://docs.astro.build/en/basics/project-structure/).

```text
/
├── .github/
├── .husky/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── content/
│   │   └──config.ts
│   │       └──<ContentType>
│   │           └── assets
│   │           └── de
│   │           └── en
│   ├── i18n/
│   ├── lib/
│   └── pages/
│       └── [lang]
│            └── *.astro
├── package.json
└── tailwind.config.js
```

### `/public` folder

Any static assets, like images, can be placed in the `public/` directory. Warning: This enables public links to them, usually not a bad thing for most stuff, but be aware of that. Putting - for example - a JSON file here, means users of your site could access that JSON file unfiltered. This might be something you do not want.

### `/assets` folder

In the assets folder, you'll find images, audio, video files etc. that are being used in various places in the app. Astro needs most assets to live inside of the `src` folder, so that's why we maintain them here in this subfolder. Assets need to be accessed with a `relative` link, we don't have an absolute path (differing to the `/public` folder which supports this.).

> ⚠️ If you're using images in Astro anywhere, use the `<Image>` component that is built-in in Astro. It can optimize images for user's screen size and export them smaller in that case. If you use the standard `<img>` tag, those optimizations are not applied.

### `/components` folder

In `src/components/`, is where we like to put any Astro/React/Vue/Svelte/Preact components. The folder is further divided into a few subfolders.

- In `/business` there are only components that have a clear business-related or work-specific use case. Think of any components that can truly only be used in this project and aren't duplicatable to another project.
- In `/pages` you'll find the main component that is linked to a specific Astro page. We usually use those to have a singular point to create the rest of a page structure from. Check the `/src/pages/*.astro` files to see them being used.
- In `/ui` you'll find all reusable components that are being used everywhere in the app. They are consistenly styled components that we need at multiple places, providing a reusable base. Especially interesting is the `Box` component, which we use for a lot of elements on this site. Check to see that it can be configured to be either a `div` or an `<a>` tag, depening on if you provide an `href` prop to it. If it's given an href prop, it can be clicked and has hover animations. Otherwise it doesn't.

### `/layouts` folder

Layouts in Astro are used to wrap most components into a common structure that you need to reuse on multiple pages. In our case we have a `Base` layout, that wraps around all of the pages we defined. It provides all the pages with a `<head>` element with all stylings, important imports, metadata etc. It also provide as `<main>` HTML element in which it lays the content of a page, putting `Nav` component above it and `<Footer>` below it so they are consistent on all pages.

If you needed different layouts for different pages, you could add more layouts here. For example: If you wanted to add an event page, that is not part of the standard web page, you could remove the Nav component and Footer there or do them differently.

See [https://docs.astro.build/en/basics/layouts/](https://docs.astro.build/en/basics/layouts/) for more.

### `/content` folder

This folder is your actual content that is available in multiple languages on your web page. Think of this folder as your CMS system in Astro. Content can either be defined as `data` or type `content`.

- `data` means it's multiple JSON files that can hold information and can be used in very versatile ways on all pages / components
- `content` means it's multiple Markdown files that contain content to be used on blog posts or other text-based pages.

This means, articles, blog posts etc. should usually be defined as content, as we're mostly interested in creating content in Markdown form.

Everything else can be defined as data to use it as JSON object in our components.

You'll find all your defined content in the `config.ts` file. Every data type that you have is called a `Collection` in Astro. Every collection needs to be a subfolder below the `/content` folder as you can see.

Collections are defined using typing library `zod`. As you can see usually those are defined with arrays, objects and then native data types like string, date, number etc. These defined collections are checked against the data that you actually created within the subfolders, so if your data does not fit the defined collection types, you will get errors in build time, as the data can't be used when the types don't match.

In the `config.ts` you'll also find interfaces defined for all the collections. Those are done manually, if you change a collection typing, you also need to change those interfaces by hand. They are there to be used in `getCollection()` calls throughout the app to get type-safe access to all the collections.

Collections can be called upon through Astro files using the `getCollection` function call. Be sure to use the name of the collection that is at the end of the `config.ts` file. Only those names are working to find the data you want. For everything else, the function will return nothing.

#### Testimonials

There is no dedicated page for testimonials. However, every testimonial has an `identifier` that we can mention in case studies to link a testimonial to a case study. So if you'd like a specific testimonial to show up on a case study page, you need to add its identifier to the `testimonials` array of a case study.

#### Tags

As you can see, `Blog post` and `Service` collection have an attribute called `tags` which is a list of tags. If you want to link a service to a specific blog post, you need to add the services tag to the blog post. The function `findBlogpostsByTags` found in `/lib/articles/util` will then use those tags to find relevant blog posts on service pages to include them for the user.

### `/i18n` folder

This folder is used to define all the labels used in the web app for both english and german language and provide helper functions for the app to easily use them.

You can find all translation labels in the `labels.ts`. This file is also checked on commit (using a Husky function and the script `validate-translations.ts`) so if you forget to create a label or delete a label only in one language, the script will not let you commit until the mistake is corrected. That way you can't ever forget about a translation in one language.

The `utils.ts` contains some helper functions to easily access translations throughout the app, as well as filter i18n-specific data by language.

Read more about i18n in Astro here: [https://docs.astro.build/en/recipes/i18n/](https://docs.astro.build/en/recipes/i18n/)

### `/lib` folder

This folder contains some helper functions that regard content processing or similar.

### `/pages` folder

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

We are working in a multilanguage app, so we're taking advantage of [Astro's dynamic routing](https://docs.astro.build/en/guides/routing/) function here.

The root `index.astro` is set up in a way that it immediately reroutes to a language specific index file. By default it routes to the german sub-site "/de" as we expect most visitors to be german speakers. You could change this to english by just changing the sub-route to "en" instead.

The dynamic route folder [lang] means that this subroute exists for multiple languages. Because we're working in Astro's SSG we have to give Astro the information what paths it has to render statically on build time. We're doing that on all pages and subpages, by providing a `getStaticPaths` function that exports all paths needed.

As you can see, some pages are only renderer in the two languages. Those are usually the base routes, like /blog or /imprint.

For sites that are dynamic, based on collections that can change, we need to run through all the collection data to give Astro that information. You can see an example here.

```
// This is in /[lang]/blog/[...slug].astro
export async function getStaticPaths() {
  const pages = await getCollection("blog");

  const paths = pages.map((page) => {
    const [lang, ...slug] = page.slug.split("/");
    return { params: { lang, slug: slug.join("/") || undefined }, props: page };
  });

  return paths;
}
```

All blog posts need to be rendered statically, but we don't know the route before we actually render them. That is what the [...slug] part of the route takes care of. Every blog post has a slug, that will be used to render the page route.

The slug will be the name of the collection file. For example a blog post named `my-blog-post-1.md` will have the slug `my-blog-post-1` and create the route `/[lang]/blog/my-blog-post-1`.

All files that you add to the `/pages` folder will create a new route with the name of the file.

For example a file under `/pages/[lang]/hello.astro` will create two routes (one for each language):

- `/pages/de/hello`
- `/pages/en/hello`

and fill the routes accordingly. As we use translations from our i18n module everywhere, we only need to create one "real" page and Astro utils take care of rendering both languages there depending on the `lang` prop it provides.
