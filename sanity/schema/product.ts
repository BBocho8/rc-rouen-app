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
			name: "in_stock",
			title: "In Stock",
			type: "boolean",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "price",
			title: "Price",
			type: "number",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "is_discounted",
			title: "Is Discounted",
			type: "boolean",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "discounted_price",
			title: "Discounted Price",
			type: "number",
		},
		{
			name: "expedition",
			title: "Expedition",
			type: "number",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "description",
			title: "Description",
			type: "text",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "details",
			title: "Details",
			type: "array",
			of: [{ type: "string" }],
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "image",
			title: "Image",
			type: "array",
			// validation: (Rule: any) => Rule.required(),
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
		{
			title: "Sizes Available",
			name: "sizes",
			type: "array",
			of: [{ type: "string" }],
			options: {
				list: [
					{ title: "XS", value: "xs" },
					{ title: "S", value: "s" },
					{ title: "M", value: "m" },
					{ title: "L", value: "l" },
					{ title: "XL", value: "xl" },
					{ title: "2XL", value: "2xl" },
					{ title: "3XL", value: "3xl" },
				],
			},
		},
	],
}

export default product
