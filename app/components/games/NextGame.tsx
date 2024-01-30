"use client"
import { CurrentNextGame } from "@/app/types/games"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logoTest.png"
import {
	getFormattedTime,
	getFullFormattedDate,
} from "@/app/utils/getFormattedDate"
import { twMerge } from "tailwind-merge"
type NextGameProps = {
	games: CurrentNextGame
	isHomePageHeader?: boolean
}

const NextGame = ({ games, isHomePageHeader = false }: NextGameProps) => {
	const nextGameDate = getFullFormattedDate(games.results[1].date)
	const competition = games.results[1].competition.name
	const competitionShort = games.results[1].competition.levelName

	const homeTeam = games.results[1].teams[0].name
	const awayTeam = games.results[1].teams[1].name

	const gameTime = getFormattedTime(games.results[0].date)

	const homeTeamLogo =
		games.results[1].teams[0].logo &&
		`https://v1.scorenco.com${games.results[1].teams[0].logo}`

	const awayTeamLogo =
		games.results[1].teams[1].logo &&
		`https://v1.scorenco.com${games.results[1].teams[1].logo}`

	return !isHomePageHeader ? (
		<div>
			<p className="px-4 uppercase mb-3 mt-4 text-sm font-semibold tracking-tight text-center">
				Prochain match
			</p>
			<div className="py-10 px-7 flex flex-col items-center justify-center bg-white gap-y-4 rounded-md">
				<div className="flex flex-col justify-center items-center">
					<p className="font-medium text-sm uppercase">{nextGameDate}</p>
					<p className="font-light uppercase text-xs">{competition}</p>
				</div>

				<div className="flex justify-center items-center gap-x-2">
					<span className="uppercase font-medium   text-center line-clamp-3 sm:line-clamp-2 leading-tight text-xs sm:text-sm grow">
						{homeTeam}
					</span>
					<Image
						src={homeTeamLogo || logo}
						alt="PSG"
						width={50}
						height={50}
						className={twMerge(
							homeTeam.toLowerCase() !== "racing club de rouen" &&
								!homeTeamLogo &&
								"opacity-10"
						)}
					/>
					<span className="py-2 px-3 text-gray-600  bg-gray-200 rounded-lg font-semibold">
						{gameTime}
					</span>

					<Image
						src={awayTeamLogo || logo}
						alt="Metz"
						width={50}
						height={50}
						className={twMerge(
							awayTeam.toLowerCase() !== "racing club de rouen" &&
								!awayTeamLogo &&
								"opacity-10"
						)}
					/>
					<span className="uppercase font-medium   text-center line-clamp-3 sm:line-clamp-2 leading-tight text-xs sm:text-sm grow">
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
		</div>
	) : (
		<>
			<div className="bg-primary-dark grid grid-cols-3 grid-rows-3 justify-between items-center px-4 py-2 gap-x-4 rounded-sm ">
				<p className="uppercase text-sm text-secondary font-bold col-span-3 text-center">
					Prochain match
				</p>

				<div className="flex items-center justify-center col-span-2">
					<Image
						src={homeTeamLogo || logo}
						alt="Paris"
						width={35}
						height={35}
						className={twMerge(
							"translate-x-[5px]",
							homeTeam.toLowerCase() === "racing club de rouen" && "z-[2]",
							!homeTeamLogo &&
								homeTeam.toLowerCase() !== "racing club de rouen" &&
								"opacity-10"
						)}
					/>
					<Image
						src={awayTeamLogo || logo}
						alt="Metz"
						width={35}
						height={35}
						className={twMerge(
							"translate-x-[-5px]",
							awayTeam.toLowerCase() === "racing club de rouen" && "z-[2]",
							!awayTeamLogo &&
								awayTeam.toLowerCase() !== "racing club de rouen" &&
								"opacity-10"
						)}
					/>
					<div className="flex flex-col justify-center items-start">
						<p className="uppercase font-semibold  max-w-40  line-clamp-1 leading-tight text-white text-xs">
							{homeTeam}
						</p>
						<p className="uppercase font-semibold  max-w-40  line-clamp-1 leading-tight text-white text-xs">
							{awayTeam}
						</p>
					</div>
				</div>

				<div className="flex gap-x-1 justify-center items-center ">
					<span
						className={twMerge(
							"py-2 px-3 font-bold text-xl bg-secondary text-primary rounded-lg"
						)}
					>
						{gameTime}
					</span>
				</div>

				<div className="flex flex-col justify-center items-center col-span-2 pl-2">
					<span className="uppercase text-gray-200 font-light text-xs tracking-tight line-clamp-1">
						{nextGameDate}
					</span>

					<span className="uppercase text-gray-200 font-light text-xs tracking-tight pl-2 line-clamp-1">
						{competitionShort}
					</span>
				</div>

				<button
					type="button"
					className="uppercase text-white text-xs font-bold cursor-pointer hover:opacity-80 transition"
				>
					infos
				</button>
			</div>
		</>
	)
}
export default NextGame
