"use client"

import MainBar from "@/app/components/equipeSection/MainBar"

import { useParams, usePathname } from "next/navigation"

const ClassementPage = () => {
	const { equipe } = useParams()

	const menuName = usePathname().split("/")?.[3]

	return (
		<div>
			<MainBar menuName="classement" equipe={equipe as string} />
		</div>
	)
}
export default ClassementPage
