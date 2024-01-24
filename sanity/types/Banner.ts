export type BannerApiResponse = Banner[]

export interface Banner {
	smallText: string
	midText: string
	largeText1: string
	largeText2: string
	buttonText: string
	image_url: string
	image_alt: string
	_createdAt: string
	_updatedAt: string
	_id: string
	discount: string
	desc: string
	product: string
	_type: string
	saleTime: string
}
