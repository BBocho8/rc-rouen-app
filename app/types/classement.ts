export interface Classement {
	id: string
	name: string
	shortName: any
	sportId: string
	slug: string
	rankings: Ranking[]
}

export interface Ranking {
	name: string
	date: string
	url: string
	teamId: string
	competitionId: string
	teams: Team[]
}

export interface Team {
	clubId: string
	teamId: string
	name: string
	shortName: string
	teamSlug: string
	clubSlug: string
	rank: number
	data: Daum[]
	logo?: string
	teamUrlV2: string
}

export interface Daum {
	pts?: number
	jo?: number
	g?: number
	n?: number
	p?: number
	f?: number
	bp?: number
	bc?: number
	diff?: string
	fix_points?: number
}
