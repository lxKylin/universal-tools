import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Universal Tools",
  description: "一个实用的 JavaScript/TypeScript 工具库",
  themeConfig: {
    nav: [
      { text: "指南", link: "/guide/what-is-vitepress" },
      { text: "API", link: "/api/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "介绍",
          items: [
            { text: "快速开始", link: "/guide/" },
            { text: "什么是vitepress", link: "/guide/what-is-vitepress" },
            { text: "安装", link: "/guide/installation" },
          ],
        },
      ],
      "/api/": [
        {
          text: "API 参考",
          items: [
            { text: "字符串工具", link: "/api/string" },
            { text: "数组工具", link: "/api/array" },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/yourusername/universal-tools",
      },
    ],
    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2019-${new Date().getFullYear()} 尤雨溪`,
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
    },

    notFound: {
      title: "页面未找到",
      quote:
        "但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。",
      linkLabel: "前往首页",
      linkText: "带我回首页",
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    skipToContentLabel: "跳转到内容",
  },
});
