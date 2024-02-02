const shopRubriques = {
	name: "shopRubriques",
	title: "Shop Rubriques",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "order",
			title: "Order",
			type: "number",
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

export default shopRubriques
