import AdminNavbar from "@/app/components/admin-dashboard/AdminNavbar"
import { Roboto } from "next/font/google"
import "@/app/styles/globals.css"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const metadata = {
	title: "Admin Dashboard",
	description: "Generated by Next + Sanity",
}
const roboto = Roboto({
	subsets: ["latin"],
	variable: "--font-roboto",
	weight: ["300", "400", "500", "700"],
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className={`${roboto.variable} font-sans mx-auto`}>
			<header>
				<AdminNavbar />
			</header>
			<main>
				<ToastContainer position="top-center" />
				{children}
			</main>
		</div>
	)
}