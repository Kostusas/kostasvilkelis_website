import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
  home: {
    title: "About",
    subtitle: "",
    isActive: true,
  },
  blog: {
    title: "Posts",
    subtitle: "Notes on research software and numerical methods.",
    isActive: true,
  },
  publications: {
    title: "Publications",
    subtitle: "Scientific publications.",
    isActive: true,
  },
  talks: {
    title: "Talks",
    subtitle: "",
    isActive: false,
  },
  projects: {
    title: "Projects",
    subtitle: "Research software, open-source work, and public contributions.",
    isActive: true,
  },
  teaching: {
    title: "Teaching",
    subtitle: "",
    isActive: false,
  },
  tags: {
    title: "Tags",
    subtitle: "",
    isActive: false,
  },
  cv: {
    title: "CV",
    subtitle: "A preliminary professional overview.",
    isActive: true,
  },
};
