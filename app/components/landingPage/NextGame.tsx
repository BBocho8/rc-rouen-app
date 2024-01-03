"use client"
import { CurrentNextGame } from "@/app/types/games"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logoTest.png"
import {
	getFormattedTime,
	getFullFormattedDate,
} from "@/app/utils/getFormattedDate"
type NextGameProps = {
	games: CurrentNextGame
}

const NextGame = ({ games }: NextGameProps) => {
	const nextGameDate = getFullFormattedDate(games.results[1].date)
	const competition = games.results[1].competition.name
	const homeTeam = games.results[1].teams[0].name
	const awayTeam = games.results[1].teams[1].name

	const gameTime = getFormattedTime(games.results[0].date)
	return (
		<>
			<p className="px-4 uppercase mb-3 mt-4 text-sm font-semibold tracking-tight ">
				Prochain match
			</p>
			<div className="py-10 px-7 flex flex-col items-center justify-center bg-gray-100 gap-y-4">
				<div className="flex flex-col justify-center items-center">
					<p className="font-medium text-sm uppercase">{nextGameDate}</p>
					<p className="font-light uppercase text-xs">{competition}</p>
				</div>

				<div className="flex justify-center items-center gap-x-2">
					<span className="uppercase font-semibold  max-w-32 text-center line-clamp-2 leading-tight">
						{homeTeam}
					</span>
					<Image src={logo} alt="PSG" width={50} height={50} />
					<span className="py-2 px-3 text-gray-600  bg-gray-200 rounded-lg">
						{gameTime}
					</span>

					<Image src={logo} alt="Metz" width={50} height={50} />
					<span className="uppercase font-semibold  max-w-32 text-center line-clamp-2 leading-tight">
						{awayTeam}
					</span>
				</div>

				<button
					type="button"
					className="border-b-2 text-primary border-b-primary pb-0.5 uppercase font-semibold hover:opacity-80 transition"
				>
					<Link href="/">Informations</Link>
				</button>
			</div>
		</>
	)
}
export default NextGame
