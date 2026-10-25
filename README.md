# mounirdhahri.github.io

Personal site and blog, built with [Astro](https://astro.build) on the [Astro Micro](https://github.com/trevortylerlee/astro-micro) theme and deployed to GitHub Pages.

## Develop

```sh
bun install
bun run dev      # http://localhost:4321
bun run build    # type-checks, then builds to dist/ with the search index
bun run preview  # serves dist/; search only works here, not in dev
```

## Write a post

Create a folder in `src/content/blog/` with an `index.md` (or `index.mdx`) inside. The folder name becomes the URL (`my-post/` → `/blog/my-post/`). Put the post's images in the same folder and link them as `./image.png`.

```md
---
title: "Post title"
description: "One sentence for listings, RSS and search results."
date: 2026-10-25
tags: ["astro"]
draft: true # optional; drafts are left out of the site
---
```

For an article first published elsewhere, add where it came from. It then shows an "Originally published on" note, points search engines at the original and appears on `/crossposts`:

```md
crosspost:
  name: "Artsy Engineering"
  url: "https://artsy.github.io/blog/2026/01/09/artsy-mobile-2025-wrapped/"
```

Before publishing, follow the privacy check in `AGENTS.md`.

## Deploy

Pushing to `gh-pages` runs `.github/workflows/deploy.yml`, which builds the site and publishes it. In the repo settings, Pages → Source must be set to "GitHub Actions".
