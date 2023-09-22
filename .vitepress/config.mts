import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BunsterJs",
  description: "A simple yet powerful API framework built for bun",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/quick-start" },
    ],
    logo: {
      src: "public/hero.svg",
    },
    sidebar: [
      {
        text: "Getting Started",
        items: [
          {
            text: "Introduction",
            link: "/quick-start",
          },
        ],
      },
      {
        text: "Basics",
        items: [
          {
            text: "Routing",
            link: "/route",
          },
          {
            text: "Route Input & Validation",
            link: "/input",
          },
          {
            text: "Middlewares",
            link: "/middleware",
          },
          {
            text: "Schedulers",
            link: "/scheduler",
          },
          {
            text: "Logger",
            link: "/logger",
          },
        ],
      },
      {
        text: "Helpers",
        items: [
          {
            text: "JWT",
            link: "/jwt",
          },
          {
            text: "Mail",
            link: "/mail",
          },
          {
            text: "DateTime",
            link: "/datetime",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/bguruprasath5/bunsterjs" },
    ],
  },
});
