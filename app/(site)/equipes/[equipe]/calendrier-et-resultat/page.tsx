"use client"

import MainBar from "@/app/components/equipeSection/MainBar"

import { useParams, usePathname } from "next/navigation"

const CalendrierResultatsPage = () => {
	const { equipe } = useParams()

	const menuName = usePathname().split("/")?.[3]

	return (
		<div>
			<MainBar menuName="calendrier-et-resultat" equipe={equipe as string} />
		</div>
	)
}
export default CalendrierResultatsPage
