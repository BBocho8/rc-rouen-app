const etiquettes = {
	name: "etiquettes",
	title: "Etiquettes",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule: any) => Rule.required(),
		},

		{
			name: "slug",
			title: "Slug",
			type: "slug",
			validation: (Rule: any) => Rule.required(),

			options: {
				source: "title",
				maxLength: 96,
			},
		},
	],
}

export default etiquettes
