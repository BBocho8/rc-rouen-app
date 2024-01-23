import Link from "next/link"
import React from "react"
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
	return (
		<div className="text-sidenavBG text-center  py-[30px] px-[10px] font-light flex flex-col items-center gap-[10px] justify-center bg-primary text-sm">
			<p>2024 RC ROUEN Boutique - All rights reserved</p>
			<p className="flex text-[30px] gap-[10px] justify-center">
				<Link href="https://www.instagram.com/">
					<AiFillInstagram className="text-gray-200 hover:text-gray-50 cursor-pointer" />
				</Link>
				<Link href="https://twitter.com/">
					<AiOutlineTwitter className="text-gray-200 hover:text-gray-50 cursor-pointer" />
				</Link>
			</p>
		</div>
	)
}

export default Footer
