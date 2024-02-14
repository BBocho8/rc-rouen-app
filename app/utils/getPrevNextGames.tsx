import { CurrentNextGame } from "../types/games"

export const getGames = async (): Promise<CurrentNextGame> => {
	const res = await fetch(
		"https://v1.scorenco.com/backend/v1/teams/64f5de235783a47e1f40ae60/current-next-events/?format=json",
		{ method: "GET", redirect: "follow", cache: "no-cache" }
	)
	const data = await res.json()
	return data
}
