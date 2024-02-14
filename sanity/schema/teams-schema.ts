const teams = {
	name: "teams",
	title: "Teams",
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
		{
			name: "color",
			title: "Color",
			type: "string",
		},
	],
}

export default teams
