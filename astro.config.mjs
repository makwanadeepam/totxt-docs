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
          label: "Create",
          items: [{ label: "Create", link: "/create/create" }],
        },
        {
          label: "Advanced",
          items: [{ label: "Recreate", link: "/recreate/recreate" }],
        },
        {
          label: "Development",
          items: [{ label: "Contributing", link: "/development/contributing" }],
        },
      ],
    }),
  ],
});
