# AGENTS.md

Personal site and blog for Mounir Dhahri. Built on the [Astro Micro](https://github.com/trevortylerlee/astro-micro) theme (Astro 6, Tailwind 4, Pagefind search), installed with Bun, deployed to GitHub Pages.

## Commands

- `bun install`
- `bun run dev`: local server at http://localhost:4321
- `bun run build`: runs `astro check`, then builds to `dist/`

Pushing to `gh-pages` deploys the live site through `.github/workflows/deploy.yml`.

## Posts

- Each post is a folder: `src/content/blog/<slug>/index.md` (or `.mdx`), with its images next to it, linked as `./image.png`. The folder name is the URL.
- Frontmatter follows the schema in `src/content.config.ts`: `title`, `description`, `date`, optional `tags`, `draft`, `crosspost`.
- Site title, descriptions and social links live in `src/consts.ts`.
- Keep the author's wording. Fix only what breaks the build or the layout, and ask before any other edit.

### Crossposts

A crosspost is an article first published somewhere else (for example the Artsy Engineering blog) and copied here in full. Add `crosspost: { name, url }` to its frontmatter. The post page then shows "Originally published on …", sets the canonical URL to the original, and the post appears on `/crossposts` as well as `/blog`.

When importing one:
- Use the original publication `date`.
- Copy the text as published. Convert only formatting the site can't render, such as Jekyll front matter, `<!-- more -->`, Liquid tags and raw `<img>` tags with absolute paths (turn those into `![alt](./file.png)` next to `index.md`).
- If the source has no description or alt text, draft them and ask the author to approve.
- The privacy check below still applies, even when the original is already public.

## Privacy check before publishing

Everything in this repo is public, including git history. Mounir works at Artsy and often writes about that work. Before you commit, push or deploy a new or changed post, read the whole post **and every image in it**. Screenshots often contain the details below.

Flag any of these:

- **Repository names.** Name an employer repo only if it is public. Check with `gh repo view <org>/<repo> --json visibility`. If you can't verify it, treat it as private.
- **Internal systems.** Service names, internal tools, hostnames, URLs, dashboards, environment names or architecture details that aren't already public.
- **Internal numbers.** Delivery metrics (PR counts, review rates, lines changed), revenue, costs, token spend, user counts and similar figures.
- **Internal communication.** Quotes or paraphrases from Slack, Notion, Jira, email or meetings.
- **People.** Colleagues' names or roles, unless they agreed to be named.
- **Unreleased work.** Features, plans or timelines the company hasn't announced.
- **Secrets.** Keys, tokens, internal IDs, customer or user data.

How to report:

1. List each finding with its file and line number, or the image name and where it appears in the image, and say why it may be private.
2. Suggest a generic replacement, for example "our main API" or "the mobile app". For screenshots, suggest cropping, blurring, or rebuilding the figure with only public numbers.
3. Don't edit the text or images yourself. The author decides.
4. Don't commit, push or deploy the post until the author confirms each finding is fixed or cleared for publication.

Run this check every time, including for small edits and posts that passed before. When in doubt, flag it.
