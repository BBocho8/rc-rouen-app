const globalConfig = {
	name: "global-config",
	type: "document",
	title: "Global Config Images",
	fields: [
		{
			type: "string",
			name: "name",
			title: "Name",
		},

		{
			name: "slug",
			title: "Slug",
			type: "slug",
			validation: (Rule: any) => Rule.required(),

			options: {
				source: "name",
				maxLength: 96,
			},
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					title: "Alt",
					type: "string",
				},
			],
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
	],
}

export default globalConfig
