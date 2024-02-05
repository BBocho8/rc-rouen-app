import AdminNavbar from "@/app/components/admin-dashboard/AdminNavbar"
import { Roboto } from "next/font/google"
import "@/app/styles/admin.css"

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
		<html lang="en" className={`${roboto.variable} font-sans `}>
			<body>
				<header>
					<AdminNavbar />
				</header>
				{children}
			</body>
		</html>
	)
}
