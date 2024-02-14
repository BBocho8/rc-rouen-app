const orders = {
	name: "orders",
	title: "Orders",
	type: "document",
	fields: [
		{
			name: "date",
			title: "Date",
			type: "number",
		},
		{
			name: "client_name",
			title: "Client Name",
			type: "string",
		},
		{
			name: "client_mail",
			title: "Client Mail",
			type: "string",
		},
		{
			name: "client_address",
			title: "Client Address",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "line1",
							type: "string",
							title: "Line 1",
						},
						{
							name: "line2",
							type: "string",
							title: "Line 2",
						},
						{
							name: "postal_code",
							type: "string",
							title: "Postal Code",
						},
						{
							name: "city",
							type: "string",
							title: "City",
						},
						{
							name: "country",
							type: "string",
							title: "Country",
						},
						{
							name: "state",
							type: "string",
							title: "State",
						},
						// {
						// 	name: "_key",
						// 	title: "_key",
						// 	type: "string",
						// },
					],
				},
			],
		},

		{
			name: "shipping_rate",
			title: "Shipping Rate",
			type: "number",
		},
		{
			name: "order_subtotal_amount",
			title: "Order Subtotal Amount",
			type: "number",
		},
		{
			name: "order_total_amount",
			title: "Order Total Amount",
			type: "number",
		},

		{
			name: "order_items",
			title: "Order Items",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						// {
						// 	name: "_key",
						// 	title: "_key",
						// 	type: "string",
						// },
						{
							name: "product_ID",
							type: "string",
							title: "Product ID",
						},
						{
							name: "size",
							type: "string",
							title: "Size",
						},
						{
							name: "quantity",
							type: "number",
							title: "Quantity",
						},
						{
							name: "amount_subtotal",
							type: "number",
							title: "Amount Subtotal",
						},
						{
							name: "amount_total",
							type: "number",
							title: "Amount Total",
						},
					],
				},
			],
		},

		{
			title: "Status",
			name: "status",
			type: "string",
			initialValue: "pending",
			options: {
				list: [
					{ title: "PENDING", value: "pending" },
					{ title: "PROCESSING", value: "processing" },
					{ title: "SHIPPED", value: "shipped" },
					{ title: "DELIVERED", value: "delivered" },
					{ title: "CANCELLED", value: "cancelled" },
					{ title: "REFUNDED", value: "refunded" },
				],
			},
		},
	],
}

export default orders
