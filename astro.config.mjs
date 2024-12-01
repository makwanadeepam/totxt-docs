import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Docs",
      social: {
        github: "https://github.com/makwanadeepam/totxt",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Overview", link: "/getting-started/overview" },
            { label: "Installation", link: "/getting-started/installation" },
          ],
        },
        {
          label: "Usage",
          items: [{ label: "Basic Usage", link: "/usage/basic-usage" }],
        },
        {
          label: "Advanced",
          items: [
            { label: "Recreate Script", link: "/advanced/recreate-script" },
          ],
        },
        {
          label: "Development",
          items: [{ label: "Contributing", link: "/development/contributing" }],
        },
      ],
    }),
  ],
});
