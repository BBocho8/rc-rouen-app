import Image from "next/image"
import testHero from "@/public/testHero.jpg"
import { HiArrowLongRight } from "react-icons/hi2"
import { CurrentNextGame } from "@/app/types/games"
import PrevGame from "./PrevGame"
import moment from "moment"
import NextGame from "./NextGame"

type HeroHeaderProps = {
	games: CurrentNextGame
}
const HeroHeader = ({ games }: HeroHeaderProps) => {
	// console.log(moment(games.results[0].date).fromNow())
	// console.log(moment(games.results[1].date).fromNow())
	// console.log(
	// 	moment(games.results[1].date).fromNow() <
	// 		moment(games.results[0].date).fromNow()
	// )
	// console.log(games.results[0].date)
	// console.log(games.results[1].date)

	return (
		<div className="lg:grid  lg:grid-cols-5 lg:grid-rows-1  bg-white ">
			<div className="relative lg:row-span-1 h-80 sm:h-96 lg:h-screen-lg-nav lg:col-span-3 bg-emerald-200 w-full   md:h-screen-lg-nav-full">
				<Image
					src={testHero}
					alt="hero"
					fill
					priority
					className="object-cover"
				/>
			</div>
			<div className="    h-[25rem]  md:h-[28rem] lg:row-span-1  lg:h-screen-lg-nav lg:col-span-2 hero w-full  flex flex-col gap-y-5  lg:px-8 justify-center items-start px-4 ">
				<div className="flex flex-col gap-y-2 lg:gap-y-4">
					<span className="uppercase text-secondary font-bold text-[14px]">
						équipe première
					</span>
					<span className="text-white text-xl sm:text-2xl md:text-4xl lg:text-2xl font-semibold">
						Une offre de transfert a été acceptée pour le transfert de notre
						joueur Josué Lagui vers l&apos;US Palmese 1912.
					</span>
					<span>
						<HiArrowLongRight className="text-secondary text-[2rem] lg:text-[3rem]" />
					</span>
				</div>
				<div className="mx-auto shadow-md w-full">
					{moment(games.results[1].date).fromNow() <
					moment(games.results[0].date).fromNow() ? (
						<PrevGame games={games} isHomePageHeader />
					) : (
						<NextGame games={games} isHomePageHeader />
					)}
				</div>
			</div>
		</div>
	)
}
export default HeroHeader
