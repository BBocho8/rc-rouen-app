export type orderResponse = {
	session: {
		sessionID: string
		amount_subtotal: number
		amount_total: number
		payment_intent: string
		shipping: {
			amount_subtotal: number
			amount_tax: number
			amount_total: number
			shipping_rate: string
		}
		address: {
			city: string
			country: string
			line1: string
			line2: string | null
			postal_code: string
			state: string
			province?: string | null
		}
		client: string
	}
	products: [
		{
			amount_subtotal: number
			amount_total: number
			productID: SingleItem[]
			quantity: number
		}
	]
}

type SingleItem = {
	metadata: { id: string; size: string }
	name: string
}
