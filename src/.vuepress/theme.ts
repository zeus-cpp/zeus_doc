import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://docs.ZLMediaKit.com",
  logo: "/logo.svg",
  favicon: "/favicon.ico",
  iconAssets: "fontawesome-with-brands",

  author: {
    name: "ZeusFramework",
    url: "https://docs.ZLMediaKit.com",
  },
  repo: "ZeusFramework/ZeusFramework",
  docsRepo: "ZeusFramework/docs",
  docsDir: "src",

  navbarLayout: {
    start: ["Brand"],
    center: [],
    end: ["Links", "Language", "Repo", "Outlook", "Search"],
  },

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "MIT Licensed",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "MIT Licensed",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  plugins: {
    // You should generate and use your own comment service
    comment: {
      provider: "Giscus",
      repo: "CaptainNeil/zeus_doc",
      repoId: "R_kgDOLmn0kg",
      category: "General",
      categoryId: "DIC_kwDOLmn0ks4CeTAy",
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      figure: true,
      imgLazyload: true,
      imgSize: true,
      mermaid: true,
      tabs: true,
    },

    // uncomment these if you want a pwa
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-touch-icon-152x152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "ZeusFramework Docs",
            short_name: "ZLM",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
