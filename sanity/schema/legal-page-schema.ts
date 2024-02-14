import { defineDocument } from "sanity-typed-queries"

const { document } = defineDocument("legalPages", {
	name: {
		type: "string",
		title: "Name",
	},
	slug: {
		type: "slug",
		title: "Slug",
		validation: (Rule) => Rule.required(),
		options: {
			source: "name",
		},
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
