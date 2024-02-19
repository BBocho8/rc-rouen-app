import Calendrier from "@/app/components/equipeSection/Calendrier"
import MainBar from "@/app/components/equipeSection/MainBar"
import NextGame from "@/app/components/games/NextGame"
import PrevGame from "@/app/components/games/PrevGame"
import { getCalendrier } from "@/app/utils/getCalendrier"
import { getGames } from "@/app/utils/getPrevNextGames"
import { getGlobalConfigImages } from "@/sanity/utils/blog/getConfig"
import { getTeams } from "@/sanity/utils/blog/getEquipes"

export async function generateStaticParams() {
	const teams = await getTeams()

	return teams.map((equipe) => ({
		equipe: equipe.slug,
	}))
}

const CalendrierResultatsPage = async () => {
	const teamID = process.env.NEXT_PUBLIC_SCORENCO_FIRST_TEAM_ID as string

	const games = await getGames(teamID)

	const calendrier = await getCalendrier()

	const globalConfigImages = await getGlobalConfigImages()

	const logoClub = globalConfigImages.filter(
		(image) => image.slug === "logo-club"
	)
	return (
		<div>
			<MainBar menuName="calendrier-et-resultat" />
			<div className="my-8 flex flex-col gap-y-2 lg:grid lg:grid-cols-2 lg:gap-x-4 lg:px-4">
				<PrevGame games={games} image={logoClub} />
				<NextGame games={games} image={logoClub} />
				<Calendrier calendrier={calendrier} />
			</div>
		</div>
	)
}
export default CalendrierResultatsPage
