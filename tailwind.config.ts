import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-roboto)"],
			},
			height: {
				"screen-sm-nav": "calc(100vh - 56px - 50px)",
				"screen-lg-nav": "calc(100vh - 96px - 120px)",
				"screen-lg-nav-full": "calc(100vh - 96px)",
				"screen-lg-nav-md": "calc(100vh - 96px + 240px )",
			},
			minHeight: {
				"screen-sm-nav": "calc(100vh - 56px)",
				"screen-sm-nav2": "calc(100vh - 56px)",
				"screen-lg-nav": "calc(100vh - 96px)",
				"screen-lg-nav-md": "calc(100vh - 96px + 240px )",
			},
			colors: {
				primary: "#851440",
				"primary-dark": "#4f0c26",
				"primary-bright": "#9D4266",
				secondary: "#ECE5A5",
				"secondary-bright": "#f3efc9",
				complementary: "#148559",
				"complementary-dark": "#0E5D3E",
				accent: "#FFD700",
				body: "#333333",
			},
			aspectRatio: {
				"3/2": "3 / 2",
			},
			maxWidth: {
				app: "1400px",
			},
			screens: {
				app: "1400px",
			},
			width: {
				app: "1400px",
			},
		},
		plugins: [],
	},
}
export default config
