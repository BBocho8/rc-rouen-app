"use client"

import { CalendrierApiResponse } from "@/app/types/calendrier"

type CalendrierProps = {
	calendrier: CalendrierApiResponse
}

const Calendrier = ({ calendrier }: CalendrierProps) => {
	const { roundRanks } = calendrier.config

	return (
		<div className="bg-red-300 w-[600px] h-[600px]">
			<div className="flex  text-nowrap overflow-x-scroll">
				{roundRanks.map((round) => {
					return (
						<button key={`round - ${round}`} className="px-3 py-2">
							<span>{`Journée ${round}`}</span>
						</button>
					)
				})}
			</div>
			<div>CHAMPIONNAT DETAILS</div>
			<div>LISTE DES MATCHS</div>
		</div>
	)
}
export default Calendrier
