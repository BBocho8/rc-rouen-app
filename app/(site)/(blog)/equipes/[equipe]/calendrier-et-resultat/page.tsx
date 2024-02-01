import MainBar from "@/app/components/equipeSection/MainBar"
import NextGame from "@/app/components/games/NextGame"
import PrevGame from "@/app/components/games/PrevGame"
import { getGames } from "@/app/utils/getPrevNextGames"
import { getGlobalConfigImages } from "@/sanity/utils/blog/getConfig"

const CalendrierResultatsPage = async () => {
	const games = await getGames()

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
			</div>
		</div>
	)
}
export default CalendrierResultatsPage
