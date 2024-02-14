import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import schemas from "./sanity/schema"
import { visionTool } from "@sanity/vision"
import { media } from "sanity-plugin-media"

const config = defineConfig({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
	dataset: "production",
	title: "rc-rouen-app",
	apiVersion: "2023-12-28",
	basePath: "/admin",
	plugins: [media(), deskTool(), visionTool()],
	schema: {
		types: schemas,
	},
})

export default config
