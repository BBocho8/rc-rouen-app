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
			colors: {
				primary: "#851440",
				secondary: "#ECE5A5",
				complementary: "#fff",
				accent: "#FFD700",
				dark: "#333333",
			},
		},
	},
	plugins: [],
}
export default config
