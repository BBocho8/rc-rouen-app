export type GlobalConfigImagesApiResponse = GlobalConfigImage[]

export type GlobalConfigImage = {
	_id: string
	name: string
	slug: string

	image_url: string
	image_alt: string

	description: string
}
