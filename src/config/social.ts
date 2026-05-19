import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kostas-vilkelis/",
    linkTitle: "Kostas Vilkelis on LinkedIn",
    isActive: true,
  },
  {
    name: "Github",
    href: "https://github.com/Kostusas",
    linkTitle: "Kostas Vilkelis on GitHub",
    isActive: true,
  },
  {
    name: "ORCID",
    href: "https://orcid.org/0000-0003-3372-1018",
    linkTitle: "Kostas Vilkelis on ORCID",
    isActive: true,
  },
  {
    name: "Google Scholar",
    href: "https://scholar.google.com/citations?user=bjiCr9oAAAAJ&hl=en",
    linkTitle: "Kostas Vilkelis on Google Scholar",
    isActive: true,
  },
];

export const SOCIAL_ICONS: Record<string, string> = {
  Github: "Github",
  LinkedIn: "LinkedIn",
  "Google Scholar": "GoogleScholar",
  ORCID: "ORCID",
  RSS: "RSS",
};
