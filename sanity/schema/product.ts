const product = {
	name: "product",
	title: "Product",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			validation: (Rule: any) => Rule.required(),
			options: {
				source: "name",
				maxLength: 90,
			},
		},
		{
			name: "price",
			title: "Price",
			type: "number",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "details",
			title: "Details",
			type: "text",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "image",
			title: "Image",
			type: "array",
			validation: (Rule: any) => Rule.required(),
			of: [
				{
					type: "image",
					fields: [
						{
							name: "alt",
							title: "Alt",
							type: "string",
						},
					],
				},
			],
			options: {
				hotspot: true,
			},
		},
	],
}

export default product
