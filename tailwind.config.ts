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
				"screen-sm-nav": "calc(100vh - 56px)",
				"screen-sm-nav2": "calc(100vh - 56px - 50px)",
				"screen-lg-nav": "calc(100vh - 96px)",
				"screen-lg-nav2": "calc(100vh - 96px - 120px)",
			},
			minHeight: {
				"screen-sm-nav": "calc(100vh - 56px)",
				"screen-lg-nav": "calc(100vh - 96px)",
			},
			colors: {
				primary: "#851440",
				"primary-bright": "#9D4266",
				secondary: "#ECE5A5",
				complementary: "#fff",
				accent: "#FFD700",
				body: "#333333",
			},
		},
	},
	plugins: [],
}
export default config
