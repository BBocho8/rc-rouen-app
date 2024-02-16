import { Classement } from "../types/classement"

export const getClassement = async (
	clubID: string,
	teamID: string
): Promise<Classement> => {
	const res = await fetch(
		`https://v1.scorenco.com/backend/v1/clubs/${clubID}/widget-rankings/?teamIds=${teamID}&format=json&ids=&nb_teams=0`,
		{ method: "GET", redirect: "follow", cache: "no-cache" }
	)
	const data = await res.json()
	return data
}
