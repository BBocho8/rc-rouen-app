import React from "react"
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
	return (
		<div className="text-[#324d67] text-center mt-[20px] py-[30px] px-[10px] font-semibold flex flex-col items-center gap-[10px] justify-center">
			<p>2024 RC Rouen Boutique All rights reserved</p>
			<p className="flex text-[30px] gap-[10px] justify-center">
				<AiFillInstagram />
				<AiOutlineTwitter />
			</p>
		</div>
	)
}

export default Footer
