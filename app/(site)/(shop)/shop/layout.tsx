import type { Metadata } from "next"
import "@/app/styles/globals.css"
import "@/app/styles/shop.css"
import { Roboto } from "next/font/google"
import { Footer } from "@/app/components/shop"
import { StateContext } from "@/app/context/StateContext"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { NavbarBottomBar } from "@/app/components/shop/"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import NavbarMui from "@/app/components/shop/NavbarMui"
import { getGlobalConfigImages } from "@/sanity/utils/blog/getConfig"

const roboto = Roboto({
	subsets: ["latin"],
	variable: "--font-roboto",
	weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
	title: "RC Rouen - Official Shop",
	description: "Boutique officiel du Racing Club de Rouen",
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const globalConfigImages = await getGlobalConfigImages()

	const logoClub = globalConfigImages.filter(
		(image) => image.slug === "logo-club"
	)
	return (
		<div className={`${roboto.variable} font-sans`}>
			<StateContext>
				<header className="relative">
					<div className="h-[100px] max-w-app w-full mx-auto fixed top-0 z-[100]">
						<NavbarMui image={logoClub} />
						<NavbarBottomBar />
					</div>
				</header>
				<main className="main-container  bg-white pb-10">
					<ToastContainer position="top-center" style={{ zIndex: 101 }} />
					{children}
				</main>
			</StateContext>
		</div>
	)
}
