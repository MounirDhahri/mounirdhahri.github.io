# mounirdhahri.github.io

Personal site and blog, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```sh
bun install
bun run dev      # http://localhost:4321
bun run build    # type-checks, then builds to dist/
bun run preview
```

## Write a post

Add a Markdown or MDX file to `src/content/blog/`. The file name becomes the URL (`my-post.md` → `/blog/my-post/`).

```md
---
title: "Post title"
description: "One sentence for listings, RSS and search results."
pubDate: 2026-10-25
tags: ["astro"]
draft: true # optional; drafts show in dev but not in production
---
```

## Deploy

Pushing to `gh-pages` runs `.github/workflows/deploy.yml`, which builds the site and publishes it. In the repo settings, Pages → Source must be set to "GitHub Actions".
