import { fileURLToPath } from "url";

import { SITE_NAME, SITE_TITLE } from "./app/utils/seo";

export default defineNuxtConfig({
	ssr: false,
	experimental: { typedPages: true },
	future: { compatibilityVersion: 4 },
	alias: {
		"@common": fileURLToPath(new URL("./common", import.meta.url)),
	},
	devtools: { enabled: true },
	tailwindcss: {
		exposeConfig: true,
		editorSupport: true,
		cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
	},
	colorMode: { classSuffix: "", fallback: "dark", preference: "dark" },
	css: [
		"@/assets/css/style.css",
		"@/assets/css/theme.css",
		"notivue/notifications.css",
		"notivue/animations.css",
	],
	notivue: {
		enqueue: true,
		pauseOnHover: true,
		pauseOnTabChange: true,
		position: "top-right",
		teleportTo: "body",
	},
	imports: {
		dirs: [
			fileURLToPath(new URL("./app/utils", import.meta.url)),
			fileURLToPath(new URL("./app/composables", import.meta.url)),
			fileURLToPath(new URL("./common/utils", import.meta.url)),
		],

		imports: [
			{ from: "tailwind-variants", name: "tv" },
			{ from: "tailwind-variants", name: "VariantProps", type: true },
		],
	},
	modulesDir: ["node_modules", "./common/node_modules"],

	app: {
		pageTransition: { name: "page", mode: "out-in" },
		head: {
			// htmlAttrs: { dir: "rtl", lang: "fa" },
			title: SITE_TITLE,
			titleTemplate: `%s | ${SITE_NAME}`,
		},
	},
	modules: [
		"@vee-validate/nuxt",
		"notivue/nuxt",
		"@nuxtjs/tailwindcss",
		"@nuxtjs/color-mode",
		"@vueuse/nuxt",
		"@vueuse/motion/nuxt",
		"@nuxt/icon",
		"@morev/vue-transitions/nuxt",
		"@nuxt/fonts",
		"@pinia/nuxt",
		"v-wave/nuxt",
		"nuxt-i18n-micro",
	],
	i18n: {
		locales: [
			{ code: "en", iso: "en-US", dir: "ltr" },
			{ code: "es", iso: "es", dir: "ltr" },
			{ code: "zh", iso: "zh-cn", dir: "ltr" },
			{ code: "fa", iso: "fa-IR", dir: "rtl" },
			{ code: "ar", iso: "ar-SA", dir: "rtl" },
		],
		defaultLocale: "en",
		fallbackLocale: "en",
		translationDir: "app/locales",
		meta: true,
	},
	compatibilityDate: "2024-07-09",
});
