export type OrdersApiResponse = Order[]

export type Order = {
	_id: string

	date?: number
	client_name?: string
	client_address?: ClientAddress

	order_subtotal_amount?: number
	shipping_rate?: number
	order_total_amount?: number
	order_items?: OrderItem[]
	status?: string
}

type OrderItem = {
	product_ID: string
	quantity: number
	size: string
	amount_subtotal: number
	amount_total: number
}

export type ClientAddress = {
	postal_code: string
	line1: string
	line2?: string
	country: string
	city: string
}
