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
	sizes: size[]
}

export interface Image {
	url: string
	alt: string
}

type size = "XS" | "S" | "M" | "L" | "XL" | "2XL" | "3XL"
