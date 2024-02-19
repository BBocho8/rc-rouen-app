export interface CalendrierApiResponse {
	id: string
	created: any
	name: any
	category: string
	config: Config
	data: Data
	organizationId: string
	orgaType: string
	isAdmin: boolean
	deactivated: any
}

export interface Config {
	title: string
	defaultRank: any
	height: number
	theme: string
	titleColor: string
	mainColor: string
	competitionId: string
	roundRanks: number[]
}

export interface Data {
	rounds: Round[]
	competition: Competition
}

export interface Round {
	name: string
	code: string
	rank: number
	officialDate: string
	events: Event[]
}

export interface Event {
	id: string
	name: string
	teams: Team[]
	address: string
	date: string
	day: string
	sportId: string
	status: string
	gameStatus: string
	validated: boolean
	slug: string
	url: string
	urlV2: string
	timeUnavailable: boolean
	competitionId: string
	exclusiveScorerId: any
	cityAdvert: any
	gameSide: any
	isLive: boolean
	videoLink: any
	installation: Installation
}

export interface Team {
	corners: any
	penalties: any
	coupFrancs: any
	playerChanges: any
	redCards: any
	yellowCards: any
	hotActions: any
	bars: any
	teamId: string
	clubId: string
	teamSlug: string
	clubSlug: string
	name: string
	shortName: string
	score?: number
	result?: number
	sponsors: any
	logo?: string
	teamUrlV2: string
	withdrawal?: boolean
	periodScores: any[]
	sponsoredContent: any
}

export interface Installation {
	id: string
	name: any
	address: string
	postalCode: any
	cityName: any
	coordinates: number[]
}

export interface Competition {
	id: string
	name: string
	code: string
	level: Level
	season: Season
	category: string
	family: string
	pool: Pool
	phase: Phase
	league: League
	sexe: string
	sportId: string
	updated: any
	slug: string
	sportSubCategory: any
	fedeUrl: string
	fans: any
	rounds: Round2[]
	phaseAndPoolName: string
	url: string
	teams: Team2[]
}

export interface Level {
	id: string
	name: string
	competitions: Competition2[]
}

export interface Competition2 {
	id: string
	phaseAndPoolName: string
}

export interface Season {
	sourceIds: SourceIds
	slug: string
}

export interface SourceIds {
	fff: string
}

export interface Pool {
	sourceIds: SourceIds2
	overriden: any[]
	name: string
	slug: string
}

export interface SourceIds2 {
	fff: string
}

export interface Phase {
	sourceIds: SourceIds3
	name: string
	slug: string
	overriden: any[]
}

export interface SourceIds3 {
	fff: string
}

export interface League {
	code: string
	name: string
	inseeCodes: any[]
	area: string
	rank: number
	slug: string
	overriden: any[]
	id: string
}

export interface Round2 {
	name: string
	startDate: string
	endDate: string
	officialDate: any
}

export interface Team2 {
	clubName: string
	logo?: string
	teamId: string
	shortName: string
}
