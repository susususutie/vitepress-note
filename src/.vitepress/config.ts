import { defineConfig } from "vitepress";
// import { version } from "../../package.json";

export default defineConfig({
  base: "/vitepress-note/",
  outDir: "../docs",

  lang: "zh-CN",
  title: "VitePress-Note",
  description: "VitePress 驱动的个人笔记.",

  lastUpdated: true,
  cleanUrls: false,

  head: [["meta", { name: "theme-color", content: "#3c8772" }]],

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    // prettier-ignore
    nav:  [
      { text: "前端",     activeMatch: "/fed/",      link: "/fed/nvm" },
      { text: "WSL",      activeMatch: "/wsl/",      link: "/wsl/setup" },
      { text: "Rust",     activeMatch: "/rust/",     link: "/rust/setup-for-fed-coder" },
      { text: "GitHub",   activeMatch: "/github/",   link: "/github/demo" },
    ],
    // prettier-ignore
    sidebar: {
      "/fed/": [
        { text: "nvm",                            link: "/fed/nvm" },
        { text: "OffScreenCanvas",                link: "/fed/off-screen-canvas" }
      ],
      "/wsl/": [
        { text: "WSL setup",                      link: "/wsl/setup" },
        { text: "使用 WSL",                       link: "/wsl/wsl-in-fed" },
      ],
      "/rust/": [
        { text: "写给前端开发者的 Rust 入门教程", link: "/rust/setup-for-fed-coder" },
      ],
      "/github/": [
        { text: "(待整理)",                       link: "/github/demo" },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/susususutie/vitepress-note" },
      {
        icon: {
          svg: '<svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296z"/></svg>',
        },
        link: "https://gitee.com/susususutie/vitepress-note",
      },
    ],
    outlineTitle: "文档目录",
    outline: [2, 3],
    outlineBadges: false, // 是否隐藏图标

    // 下列许多label只在窄屏下才会显示, 例如切换按钮收缩到下拉框时才会展示
    darkModeSwitchLabel: "切换主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
    editLink: {
      pattern:
        "https://github.com/susususutie/vitepress-note/edit/dev/src/:path",
      text: "在 GitHub 上编辑(dev)",
    },
    footer: {
      message: "蛤? 👓",
      copyright: "Copyright © 2023 sutie",
    },
    lastUpdatedText: "更新时间",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
  },
});
