import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "id-ID",
  title: "Centatex Printing",
  description: "Pusat Sablon DTF berkualitas",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
