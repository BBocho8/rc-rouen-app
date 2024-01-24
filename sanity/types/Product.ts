export type ProductApiResponse = Product[]

export interface Product {
	_id: string
	slug: string
	name: string
	price: number
	expedition: number
	in_stock: boolean
	is_discounted: boolean
	discounted_price?: number
	description: string
	details: string[]
	image: Image[]
	quantity?: number
	sizes: Size[]
	size?: Size
}

export interface Image {
	url: string
	alt: string
}

export type Size = "xs" | "s" | "m" | "l" | "xl" | "2xl" | "3xl"
