import { defineConfig } from "vitepress";
// import { version } from "../../package.json";

export default defineConfig({
  base: "/vitepress-note/",
  outDir: "../docs",

  lang: "zh-CN",
  title: "VitePress-Note",
  description: "VitePress 驱动的个人笔记.",

  lastUpdated: true,
  cleanUrls: true,

  head: [["meta", { name: "theme-color", content: "#3c8772" }]],

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    // prettier-ignore
    nav:  [
      { text: "WSL",      activeMatch: "/wsl/",      link: "/wsl/setup" },

      // { text: "Guide",    activeMatch: "/guide/",    link: "/guide/what-is-vitepress" },
      // { text: "Configs",  activeMatch: "/config/",   link: "/config/introduction" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/susususutie/vitepress-note" },
    ],

    sidebar: {
      "/wsl/": [
        {
          text: "Introduction",
          collapsed: false,
          items: [
            { text: "WSL setup", link: "/wsl/setup" },
            { text: "使用 WSL", link: "/wsl/wsl-in-fed" },
          ],
        },
      ],
      // "/guide/": sidebarGuide(),
      // "/config/": sidebarConfig(),
    },

    editLink: {
      pattern:
        "https://github.com/susususutie/vitepress-note/edit/develop/src/:path",
      text: "在 GitHub 上编辑(develop分支)",
    },

    footer: {
      message: "蛤? 👓",
      copyright: "Copyright © 2023 sutie",
    },

    // algolia: {
    //   appId: '8J64VVRP8K',
    //   apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //   indexName: 'vitepress'
    // },

    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // }
  },
});

function sidebarGuide() {
  return [
    {
      text: "Introduction",
      collapsed: false,
      items: [
        { text: "What is VitePress?", link: "/guide/what-is-vitepress" },
        { text: "Getting Started", link: "/guide/getting-started" },
        { text: "Configuration", link: "/guide/configuration" },
        { text: "Routing", link: "/guide/routing" },
        { text: "Deploying", link: "/guide/deploying" },
        { text: "Internationalization", link: "/guide/i18n" },
      ],
    },
    {
      text: "Writing",
      collapsed: false,
      items: [
        { text: "Markdown", link: "/guide/markdown" },
        { text: "Asset Handling", link: "/guide/asset-handling" },
        { text: "Frontmatter", link: "/guide/frontmatter" },
        { text: "Using Vue in Markdown", link: "/guide/using-vue" },
        { text: "API Reference", link: "/guide/api" },
      ],
    },
    {
      text: "Theme",
      collapsed: false,
      items: [
        { text: "Introduction", link: "/guide/theme-introduction" },
        { text: "Nav", link: "/guide/theme-nav" },
        { text: "Sidebar", link: "/guide/theme-sidebar" },
        { text: "Prev Next Link", link: "/guide/theme-prev-next-link" },
        { text: "Edit Link", link: "/guide/theme-edit-link" },
        { text: "Last Updated", link: "/guide/theme-last-updated" },
        { text: "Layout", link: "/guide/theme-layout" },
        { text: "Home Page", link: "/guide/theme-home-page" },
        { text: "Team Page", link: "/guide/theme-team-page" },
        { text: "Badge", link: "/guide/theme-badge" },
        { text: "Footer", link: "/guide/theme-footer" },
        { text: "Search", link: "/guide/theme-search" },
        { text: "Carbon Ads", link: "/guide/theme-carbon-ads" },
      ],
    },
    {
      text: "Migrations",
      collapsed: false,
      items: [
        {
          text: "Migration from VuePress",
          link: "/guide/migration-from-vuepress",
        },
        {
          text: "Migration from VitePress 0.x",
          link: "/guide/migration-from-vitepress-0",
        },
      ],
    },
  ];
}

function sidebarConfig() {
  return [
    {
      text: "Config",
      items: [
        { text: "Introduction", link: "/config/introduction" },
        { text: "App Configs", link: "/config/app-configs" },
        { text: "Theme Configs", link: "/config/theme-configs" },
        { text: "Frontmatter Configs", link: "/config/frontmatter-configs" },
      ],
    },
  ];
}
