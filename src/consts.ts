import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Mounir Dhahri",
  DESCRIPTION: "Notes and articles on software engineering.",
  NUM_POSTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Mounir Dhahri writes about software engineering and building with AI agents.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Articles on software engineering.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/MounirDhahri",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/mounir-dhahri/",
  },
  {
    NAME: "X",
    HREF: "https://x.com/mounirdhahri",
  },
];
