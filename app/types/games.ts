export interface CurrentNextGame {
	results: ResultsEntity[]
}
export interface ResultsEntity {
	id: string
	date: string
	slug: string
	slugV2: string
	sportId: string
	status: string
	gameStatus: string
	teams: TeamsEntity[]
	url: string
	urlV2: string
	timeUnavailable: boolean
	competition: Competition
	isLive: boolean
}
export interface TeamsEntity {
	logo?: string | null
	name: string
	score?: number | null
	penalties?: boolean | null
	clubId: string
	clubSlug: string
	teamId: string
	teamSlug: string
}
export interface Competition {
	id: string
	name: string
	levelName: string
	family: string
	level: Level
}
export interface Level {
	id: string
	name: string
}
