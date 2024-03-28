import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "ZeusFramework",
      description: "Official documentation for ZeusFramework",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "ZeusFramework",
      description: "ZeusFramework 官方文档",
    },
  },

  bundler: viteBundler({
    viteOptions: {
      build: {
        cssCodeSplit: false,
      },
    },
  }),

  theme,

  shouldPrefetch: false,
});
