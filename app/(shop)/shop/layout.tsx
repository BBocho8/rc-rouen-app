import type { Metadata } from "next"
import "@/app/styles/globals.css"
import "@/app/styles/shop.css"
import { Roboto } from "next/font/google"

import { Footer } from "@/app/components/shop"
import { StateContext } from "@/app/context/StateContext"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import dynamic from "next/dynamic"
import { NavbarBottomBar } from "@/app/components/shop/"

const roboto = Roboto({
	subsets: ["latin"],
	variable: "--font-roboto",
	weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
	title: "RC Rouen - Official Shop",
	description: "Boutique officiel du Racing Club de Rouen",
}

const NavbarMui = dynamic(() => import("@/app/components/shop/NavbarMui"), {
	ssr: false,
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${roboto.variable} font-sans`}>
			<body>
				<StateContext>
					<header className="relative">
						<div className="h-[100px] max-w-app w-full mx-auto fixed top-0 z-[100]">
							<NavbarMui />
							<NavbarBottomBar />
						</div>
					</header>
					<main className="main-container pt-14 sm:pt-15 md:pt-[100px] bg-white">
						<ToastContainer position="top-center" style={{ zIndex: 101 }} />
						{children}
					</main>
					<footer>
						<Footer />
					</footer>
				</StateContext>
			</body>
		</html>
	)
}
