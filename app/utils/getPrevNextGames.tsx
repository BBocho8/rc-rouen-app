import { CurrentNextGame } from "../types/games"

export const getGames = async (teamID: string): Promise<CurrentNextGame> => {
	const res = await fetch(
		`https://v1.scorenco.com/backend/v1/teams/${teamID}/current-next-events/?format=json`,
		{ method: "GET", redirect: "follow", cache: "no-cache" }
	)
	const data = await res.json()
	return data
}
