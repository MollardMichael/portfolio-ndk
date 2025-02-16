import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

export default defineConfig({
    site: "https://nodoka-kon.me/",
    integrations: [sitemap({
        canonicalURL: "https://nodoka-kon.me/",
		}), react()],
});