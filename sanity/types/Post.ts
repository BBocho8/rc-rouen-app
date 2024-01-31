export type PostApiResponse = Post[]

export interface Post {
	_id: string
	slug: string
	author: string
	categories: string[]
	team: string
	title: string
	publishedAt: string
	image_url: string
	image_alt: string
	body: Body[]
}

export interface Body {
	style: string
	_key: string
	markDefs: MarkDef[]
	children: Children[]
	_type: string
}

export interface MarkDef {
	_type: string
	href: string
	_key: string
}

export interface Children {
	marks: string[]
	text: string
	_key: string
	_type: string
}
