import type {
  AnalyticsConfig,
  SettingsConfig,
  SiteConfig,
  ThemeConfig,
  UmamiAnalyticsConfig,
} from "../types";

export const SITE: SiteConfig = {
  website: "https://kostasvilkelis.org",
  author: "Kostas Vilkelis",
  desc: "Personal academic portfolio of Kostas Vilkelis, research software engineer at VU Amsterdam.",
  title: "Kostas Vilkelis",
  ogImage: "images/placeholder.svg",
  postPerPage: 5,
  favicon: "/favicon.svg",
  lang: "en",
};

export const THEME_CONFIG: ThemeConfig = {
  lightAndDark: true,
  themeLight: "light_notepad",
  themeDark: "dark_notepad",
};

export const SETTINGS: SettingsConfig = {
  showTagsInNavbar: false,
  showRSSInFooter: false,
  addDevToolsInProduction: false,
};

const umami: UmamiAnalyticsConfig = {
  websiteId: "",
  src: "https://cloud.umami.is/script.js",
};

export const ANALYTICS: AnalyticsConfig = {
  ga4Id: "",
  umami,
};
