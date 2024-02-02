"use client"

import Link from "next/link"
import { ShopRubriquesApiResponse } from "@/sanity/types/ShopRubriques"

type NavbarBottomBarProps = {
	shopRubriques: ShopRubriquesApiResponse
}

const NavbarBottomBar = ({ shopRubriques }: NavbarBottomBarProps) => {
	return (
		<div className="hidden max-w-app mx-auto md:flex md:justify-center md:items-center md:bg-secondary  ">
			{shopRubriques.map((rubrique) => (
				<Link
					key={rubrique._id}
					href={`/shop/category/${rubrique.slug.toLowerCase()}`}
				>
					<button className="px-4 py-1.5 hover:bg-secondary-dark ">
						<span className="text-primary-dark font-semibold uppercase">
							{rubrique.title}
						</span>
					</button>
				</Link>
			))}
			<Link href="/">
				<button className="px-4 py-1.5 hover:bg-secondary-dark ">
					<span className="text-primary-dark font-semibold uppercase">
						RC Rouen
					</span>
				</button>
			</Link>
		</div>
	)
}
export default NavbarBottomBar
