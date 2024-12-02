import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://nodoka-kon.me/",
	integrations: [
		sitemap({
			canonicalURL: "https://nodoka-kon.me/",
		}),
	],
});
