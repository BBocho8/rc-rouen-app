import type { Metadata } from "next"
import "@/app/globals.css"
import { Roboto } from "next/font/google"

import Image from "next/image"
import heroForEquipe from "@/public/heroForEquipe.jpg"

const roboto = Roboto({
	subsets: ["latin"],
	variable: "--font-roboto",
	weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
	title: "RC Rouen - Official Website",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<div className="w-full max-h-96 overflow-hidden">
				<Image
					src={heroForEquipe}
					alt="Hero Actu Header"
					width={0}
					height={0}
					className="object-cover  aspect-video"
				/>
			</div>

			{children}
		</>
	)
}
