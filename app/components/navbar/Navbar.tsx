"use client"

import { useState } from "react"
import styles from "./Navbar.module.css"
import { Divide as Hamburger } from "hamburger-react"
import Image from "next/image"
import { IoIosSearch } from "react-icons/io"
import Link from "next/link"
import NavbarTopDrawer from "./NavbarTopDrawer"
import NavbarLeftDrawer from "./NavbarLeftDrawer"

import { GrContact } from "react-icons/gr"
import { GoMail } from "react-icons/go"
import { CiMail } from "react-icons/ci"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div className={styles.navbar}>
				<div className="flex justify-center items-center">
					<Hamburger
						size={22}
						distance="sm"
						color="#333333"
						rounded
						label="Show Menu"
						toggled={isOpen}
						onToggle={() => setIsOpen(!isOpen)}
					/>
					<div className="md:hidden block ">
						<NavbarLeftDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
					</div>
					<div className="hidden md:block">
						<NavbarTopDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
					</div>
					<span
						className="uppercase hidden lg:block cursor-pointer text-sm tracking-[0.9px] font-bold "
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? "Fermer" : "Menu"}
					</span>
				</div>
				<div className={`${styles.vl} hidden lg:block`}></div>
				<div className="flex justify-start items-center grow gap-x-8">
					<Link
						href="/equipes/equipe-premiere/actualite"
						className={styles["nav-link"]}
						onClick={() => setIsOpen(false)}
					>
						équipe Première
					</Link>
					<Link
						href="/shop"
						className={styles["nav-link"]}
						onClick={() => setIsOpen(false)}
					>
						shop
					</Link>
				</div>
				<Link href="/">
					<Image
						className="md:hidden absolute top-[8px] ml-[-21px] left-[50%]"
						src="/logoTest.png"
						alt="logo"
						height="42"
						width="42"
						priority
						onClick={() => setIsOpen(false)}
					/>
				</Link>
				<Link href="/">
					<Image
						className="hidden md:block md:absolute md:top-[12px] md:ml-[-21px] md:left-[50%]"
						src="/logoTest.png"
						alt="logo"
						height="72"
						width="72"
						priority
						onClick={() => setIsOpen(false)}
					/>
				</Link>
				<div className="flex justify-center items-center gap-x-2 pr-3 md:pr-0">
					<div className="hover:scale-105">
						<IoIosSearch size={25} className={styles["nav-icons"]} />
					</div>
					<div className={styles.vl}></div>
					<Link href="/contact" className="hover:scale-105">
						<GrContact size={21} className={styles["nav-icons"]} />
					</Link>
				</div>
			</div>
		</>
	)
}

export default Navbar
