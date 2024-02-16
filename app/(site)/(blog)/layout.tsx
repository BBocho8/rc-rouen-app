import "@/app/styles/globals.css"

import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

import { getTeams } from "@/sanity/utils/blog/getEquipes"
import { getEtiquettes } from "@/sanity/utils/blog/getEtiquettes"
import { getGlobalConfigImages } from "@/sanity/utils/blog/getConfig"
import { getLegalPages } from "@/sanity/utils/blog/getLegalPages"
import Navbar from "@/app/components/navbar/Navbar"

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const teams = await getTeams()
	const legalPages = await getLegalPages()
	const etiquettes = await getEtiquettes()
	const globalConfigImages = await getGlobalConfigImages()

	const logoClub = globalConfigImages.filter(
		(image) => image.slug === "logo-club"
	)

	return (
		<>
			<header>
				<Navbar teams={teams} etiquettes={etiquettes} image={logoClub} />
			</header>
			<main className=" bg-white pt-14 md:pt-24">
				<ToastContainer position="top-center" />
				{children}
			</main>
		</>
	)
}
