import { defineDocument } from "sanity-typed-queries"

const { document } = defineDocument("project", {
	name: {
		type: "string",
		title: "Name",
	},
	slug: {
		type: "slug",
		title: "Slug",
		options: {
			source: "name",
		},
	},

	image: {
		type: "image",
		title: "Image",
		options: {
			hotspot: true,
		},
		fields: [
			{
				name: "alt",
				type: "string",
				title: "Alt",
			},
		],
	},
	url: {
		type: "url",
		title: "URL",
	},
	content: {
		type: "array",
		title: "Content",
		of: [
			{
				type: "block",
			},
		],
	},
})

export default document
