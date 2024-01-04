"use client"

import { useState } from "react"
import styles from "./Navbar.module.css"
import { Divide as Hamburger } from "hamburger-react"
import Image from "next/image"
import { FaRegUser } from "react-icons/fa"
import { IoIosSearch } from "react-icons/io"
import Link from "next/link"
import NavbarTopDrawer from "./NavbarTopDrawer"
import NavbarLeftDrawer from "./NavbarLeftDrawer"

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
					<div className="md:hidden block">
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
				<div className="flex justify-start items-center grow">
					<Link
						href="/equipes/equipe-premiere/actualite"
						className={styles["nav-link"]}
					>
						équipe Première
					</Link>
				</div>
				<Link href="/">
					<Image
						className="md:hidden absolute top-[8px] ml-[-21px] left-[50%]"
						src="/logoTest.png"
						alt="logo"
						height="42"
						width="42"
					/>
				</Link>
				<Link href="/">
					<Image
						className="hidden md:block md:absolute md:top-[12px] md:ml-[-21px] md:left-[50%]"
						src="/logoTest.png"
						alt="logo"
						height="72"
						width="72"
					/>
				</Link>
				<div className="flex justify-center items-center gap-x-2 pr-3 md:pr-0">
					<FaRegUser size={20} className={styles["nav-icons"]} />
					<div className={styles.vl}></div>
					<IoIosSearch size={25} className={styles["nav-icons"]} />
				</div>
			</div>
		</>
	)
}

export default Navbar
