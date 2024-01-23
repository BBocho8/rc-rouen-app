"use client"
import { CurrentNextGame } from "@/app/types/games"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logoTest.png"
import { getFullFormattedDate } from "@/app/utils/getFormattedDate"
import { twMerge } from "tailwind-merge"
type PrevGameProps = {
	games: CurrentNextGame
	isHomePageHeader?: boolean
}

const PrevGame = ({ games, isHomePageHeader = false }: PrevGameProps) => {
	const prevGameDate = getFullFormattedDate(games.results[0].date)
	const competition = games.results[0].competition.name
	const competitionShort = games.results[0].competition.levelName
	const homeScore = games.results[0].teams[0].score
	const homeTeam = games.results[0].teams[0].name
	const awayScore = games.results[0].teams[1].score
	const awayTeam = games.results[0].teams[1].name
	const homeTeamLogo =
		games.results[0].teams[0].logo &&
		`https://v1.scorenco.com${games.results[0].teams[0].logo}`
	const awayTeamLogo =
		games.results[0].teams[1].logo &&
		`https://v1.scorenco.com${games.results[0].teams[1].logo}`
	console.log(games)
	return !isHomePageHeader ? (
		<div>
			<p className="px-4 uppercase mb-3 mt-4 text-sm font-semibold tracking-tight  ">
				Dernier match
			</p>
			<div className="py-10 px-7 flex flex-col items-center justify-center bg-gray-100 gap-y-4 rounded-md">
				<div className="flex flex-col justify-center items-center">
					<p className="font-medium text-sm uppercase">{prevGameDate}</p>
					<p className="font-light uppercase text-xs">{competition}</p>
				</div>

				<div className="flex justify-center items-center gap-x-2">
					<span className="uppercase font-semibold  max-w-32 text-center line-clamp-2 leading-tight">
						{homeTeam}
					</span>
					<Image
						src={homeTeamLogo || logo}
						alt="PSG"
						width={50}
						height={50}
						className={twMerge(
							!homeTeamLogo &&
								homeTeam.toLowerCase() !== "racing club de rouen" &&
								"opacity-10"
						)}
					/>
					<div className="flex gap-x-1 justify-center items-center">
						<span
							className={twMerge(
								"py-2 px-3 font-bold text-lg bg-gray-400 text-white rounded-lg",
								homeTeam.toLowerCase() === "racing club de rouen" &&
									"bg-gray-800"
							)}
						>
							{homeScore || "-"}
						</span>
						<span
							className={twMerge(
								"py-2 px-3 font-bold text-lg bg-gray-400 text-white rounded-lg",
								awayTeam.toLowerCase() === "racing club de rouen" &&
									"bg-gray-800"
							)}
						>
							{awayScore || "-"}
						</span>
					</div>

					<Image
						src={awayTeamLogo || logo}
						alt="Metz"
						width={50}
						height={50}
						className={twMerge(
							!awayTeamLogo &&
								awayTeam.toLowerCase() !== "racing club de rouen" &&
								"opacity-10"
						)}
					/>
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
		</div>
	) : (
		<div className="bg-primary-dark grid grid-cols-3 grid-rows-3 justify-between items-center px-4 py-2 gap-x-4 rounded-sm ">
			<p className="uppercase text-sm text-secondary font-bold col-span-3 text-center">
				Dernier match
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
						"py-2 px-3 font-bold text-xl bg-secondary-bright text-primary rounded-lg",
						homeTeam.toLowerCase() === "racing club de rouen" &&
							"bg-complementary-dark"
					)}
				>
					{homeScore}
				</span>
				<span
					className={twMerge(
						"py-2 px-3 font-bold text-xl bg-secondary-bright text-primary rounded-lg",
						awayTeam.toLowerCase() === "racing club de rouen" && "bg-secondary"
					)}
				>
					{awayScore}
				</span>
			</div>

			<div className="flex justify-center items-center col-span-2">
				<span className="uppercase text-gray-200 font-light text-xs tracking-tight pl-2">
					Terminé
				</span>
				<span className="text-white pl-1">&#8226;</span>
				<span className="uppercase text-gray-200 font-light text-xs tracking-tight pl-2 line-clamp-1">
					{competitionShort}
				</span>
			</div>

			<button
				type="button"
				className="uppercase text-white text-xs font-bold cursor-pointer hover:opacity-80 transition"
			>
				détails
			</button>
		</div>
	)
}
export default PrevGame
