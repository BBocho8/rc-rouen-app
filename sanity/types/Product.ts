export type ProductApiResponse = Product[]

export interface Product {
	_id: string
	name: string
	price: number
	details: string
	slug: string
	image: Image[]
	quantity?: number
}

export interface Image {
	url: string
	alt: string
}
