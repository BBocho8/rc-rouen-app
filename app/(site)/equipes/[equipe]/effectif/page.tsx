"use client"

import MainBar from "@/app/components/equipeSection/MainBar"

import { useParams, usePathname } from "next/navigation"

const EffectifPage = () => {
	const { equipe } = useParams()

	const menuName = usePathname().split("/")?.[3]

	return (
		<div>
			<MainBar menuName="effectif" equipe={equipe as string} />
		</div>
	)
}
export default EffectifPage
