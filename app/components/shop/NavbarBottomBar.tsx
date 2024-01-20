"use client"

import Link from "next/link"
import { navItems } from "./NavbarMui"

const NavbarBottomBar = () => {
	return (
		<div className="hidden max-w-app mx-auto md:flex md:justify-center md:items-center md:bg-secondary  ">
			{navItems.map((item) => (
				<Link key={item} href={`/shop/category/${item.toLowerCase()}`}>
					<button className="px-4 py-1.5 hover:bg-secondary-dark ">
						<span className="text-primary-dark font-semibold">{item}</span>
					</button>
				</Link>
			))}
		</div>
	)
}
export default NavbarBottomBar
