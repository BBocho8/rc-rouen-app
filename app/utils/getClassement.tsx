import next from "next"
import { Classement } from "../types/classement"
import { CurrentNextGame } from "../types/games"

export const getClassement = async (): Promise<Classement> => {
	const res = await fetch(
		"https://v1.scorenco.com/backend/v1/clubs/64f5de23cf4e61e60a7971b3/widget-rankings/?teamIds=64f5de235783a47e1f40ae60&format=json&ids=&nb_teams=0",
		{ method: "GET", redirect: "follow", cache: "no-cache" }
	)
	const data = await res.json()
	return data
}
