export type LegalPage = {
	_id: string
	name: string
	slug: string
	content: Content[]
}

export interface Content {
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
