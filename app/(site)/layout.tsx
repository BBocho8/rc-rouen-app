import type { Metadata } from "next"
import "@/app/styles/globals.css"
import { Roboto } from "next/font/google"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { getTeams } from "@/sanity/utils/blog/getEquipes"
import { getEtiquettes } from "@/sanity/utils/blog/getEtiquettes"

const roboto = Roboto({
	subsets: ["latin"],
	variable: "--font-roboto",
	weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
	title: "RC Rouen - Official Website",
	description: "Site web officiel du Racing Club de Rouen",
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const teams = await getTeams()
	const etiquettes = await getEtiquettes()
	return (
		<html lang="en" className={`${roboto.variable} font-sans`}>
			<body className="">
				<header>
					<Navbar teams={teams} etiquettes={etiquettes} />
				</header>
				<main className=" bg-white pt-14 md:pt-24">
					<ToastContainer position="top-center" />
					{children}
					<SpeedInsights />
					<Analytics />
				</main>
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	)
}
