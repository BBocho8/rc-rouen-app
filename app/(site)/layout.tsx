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
import { getGlobalConfigImages } from "@/sanity/utils/blog/getConfig"

const roboto = Roboto({
	subsets: ["latin"],
	variable: "--font-roboto",
	weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
	metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
	openGraph: {
		images: [
			{
				url: new URL(`${process.env.NEXT_PUBLIC_OPEN_GRAPH_IMAGE}`),
				width: 1200,
				height: 630,
				alt: "OpenGraph Image",
			},
		],
	},
	title: {
		default: "RC Rouen - Official Website",
		template: "%s - RC Rouen - Official Website",
	},
	description: "Site web officiel du Racing Club de Rouen",

	twitter: {
		card: "summary_large_image",
	},
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const teams = await getTeams()
	const etiquettes = await getEtiquettes()
	const globalConfigImages = await getGlobalConfigImages()

	const logoClub = globalConfigImages.filter(
		(image) => image.slug === "logo-club"
	)

	return (
		<html lang="en" className={`${roboto.variable} font-sans`}>
			<body className="">
				<header>
					<Navbar teams={teams} etiquettes={etiquettes} image={logoClub} />
				</header>
				<main className=" bg-white pt-14 md:pt-24">
					<ToastContainer position="top-center" />
					{children}
					<SpeedInsights />
					<Analytics />
				</main>
				<footer>
					<Footer image={logoClub} />
				</footer>
			</body>
		</html>
	)
}
