import type { Metadata } from "next"
import "@/app/styles/globals.css"
import { Roboto } from "next/font/google"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

const roboto = Roboto({
	subsets: ["latin"],
	variable: "--font-roboto",
	weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
	title: "RC Rouen - Official Website",
	description: "Site web officiel du Racing Club de Rouen",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${roboto.variable} font-sans`}>
			<body>
				<header>
					<Navbar />
				</header>
				<main className="pt-14 md:pt-24">
					<ToastContainer position="top-center" />
					{children}
				</main>
				<footer>
					<Footer />
				</footer>
				<div className="bg-primary w-full py-2.5 text-white flex justify-center items-center text-xs font-light">
					&#169;RC Rouen - 2024 - All rights reserved
				</div>
			</body>
		</html>
	)
}
