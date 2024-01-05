import MainBar from "@/app/components/equipeSection/MainBar"
import NextGame from "@/app/components/landingPage/NextGame"
import PrevGame from "@/app/components/landingPage/PrevGame"
import { getGames } from "@/app/utils/getPrevNextGames"

const CalendrierResultatsPage = async () => {
	const games = await getGames()
	return (
		<div>
			<MainBar menuName="calendrier-et-resultat" />
			<div className="my-8 flex flex-col gap-y-2 lg:grid lg:grid-cols-2 lg:gap-x-4 lg:px-4">
				<PrevGame games={games} />
				<NextGame games={games} />
			</div>
		</div>
	)
}
export default CalendrierResultatsPage
