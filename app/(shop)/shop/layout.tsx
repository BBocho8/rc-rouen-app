import type { Metadata } from "next"
import "@/app/styles/shop.css"
import { Roboto } from "next/font/google"

import { Navbar, Footer } from "@/app/components/shop"
import { StateContext } from "@/app/context/StateContext"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

const roboto = Roboto({
	subsets: ["latin"],
	variable: "--font-roboto",
	weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
	title: "RC Rouen - Official Shop",
	description: "Boutique officiel du Racing Club de Rouen",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${roboto.variable} font-sans`}>
			<body className="layout">
				<StateContext>
					<header className="">
						<Navbar />
					</header>
					<main className="main-container">
						<ToastContainer position="top-center" />
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
