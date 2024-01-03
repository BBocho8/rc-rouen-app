"use client"
import { CurrentNextGame } from "@/app/types/games"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logoTest.png"
import { getFullFormattedDate } from "@/app/utils/getFormattedDate"
type PrevGameProps = {
	games: CurrentNextGame
}

const PrevGame = ({ games }: PrevGameProps) => {
	const prevGameDate = getFullFormattedDate(games.results[0].date)
	const competition = games.results[0].competition.name
	const homeScore = games.results[0].teams[0].score
	const homeTeam = games.results[0].teams[0].name
	const awayScore = games.results[0].teams[1].score
	const awayTeam = games.results[0].teams[1].name
	const homeTeamLogo =
		games.results[0].teams[0].logo &&
		`https://v1.scorenco.com${games.results[1].teams[0].logo}`

	const awayTeamLogo =
		games.results[0].teams[1].logo &&
		`https://v1.scorenco.com${games.results[1].teams[1].logo}`
	return (
		<>
			<p className="px-4 uppercase mb-3 mt-4 text-sm font-semibold tracking-tight ">
				Dernier match
			</p>
			<div className="py-10 px-7 flex flex-col items-center justify-center bg-gray-100 gap-y-4">
				<div className="flex flex-col justify-center items-center">
					<p className="font-medium text-sm uppercase">{prevGameDate}</p>
					<p className="font-light uppercase text-xs">{competition}</p>
				</div>

				<div className="flex justify-center items-center gap-x-2">
					<span className="uppercase font-semibold  max-w-32 text-center line-clamp-2 leading-tight">
						{homeTeam}
					</span>
					<Image src={homeTeamLogo || logo} alt="PSG" width={50} height={50} />
					<div className="flex gap-x-1 justify-center items-center">
						<span className="py-2 px-3 font-bold text-lg bg-gray-800 text-white rounded-lg">
							{homeScore}
						</span>
						<span className="py-2 px-3 font-bold text-lg bg-gray-400 text-white rounded-lg">
							{awayScore}
						</span>
					</div>

					<Image src={awayTeamLogo || logo} alt="Metz" width={50} height={50} />
					<span className="uppercase font-semibold  max-w-32 text-center line-clamp-2 leading-tight">
						{awayTeam}
					</span>
				</div>

				<button
					type="button"
					className="border-b-2 text-primary border-b-primary pb-0.5 uppercase font-semibold hover:opacity-80 transition"
				>
					<Link href="/">Compte-Rendu</Link>
				</button>
			</div>
		</>
	)
}
export default PrevGame
