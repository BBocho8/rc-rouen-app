import { CalendrierApiResponse } from "@/app/types/calendrier"

export const getCalendrier = async (): Promise<CalendrierApiResponse> => {
	const res = await fetch(
		`https://v1.scorenco.com/backend/v1/widgets/65cf432aab489408e430d2f7/data/`,
		{ method: "GET", redirect: "follow", next: { revalidate: 60 * 60 } }
	)
	const data = await res.json()
	return data
}
