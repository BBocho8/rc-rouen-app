"use client"
import getFooterMenu from "@/app/utils/footer/getFooterMenu"

import {
	FaCcApplePay,
	FaCcMastercard,
	FaCcPaypal,
	FaCcVisa,
	FaFacebook,
	FaXTwitter,
} from "react-icons/fa6"
import Link from "next/link"

import { legal, menu, support } from "./footerMenus"
import { AiFillInstagram } from "react-icons/ai"
import moment from "moment"
import Image from "next/image"
import { GlobalConfigImagesApiResponse } from "@/sanity/types/GlobalConfigImages"

const paymentMethods = [
	{
		name: "Paypal",
		icon: <FaCcPaypal size={40} className="text-gray-500 " />,
	},
	{
		name: "Visa",
		icon: <FaCcVisa size={40} className="text-gray-500 " />,
	},
	{
		name: "Mastercard",
		icon: <FaCcMastercard size={40} className="text-gray-500 " />,
	},
	{
		name: "Apple Pay",
		icon: <FaCcApplePay size={40} className="text-gray-500 " />,
	},
]
type FooterProps = {
	image: GlobalConfigImagesApiResponse
}
const Footer = ({ image }: FooterProps) => {
	const date = moment().year()

	return (
		<>
			<div className="grid items-start justify-start grid-cols-2 px-4 py-8 mx-auto sm:grid-cols-4 gap-x-2 gap-y-4 bg-gray-50">
				<div className="flex items-center justify-start col-span-2 sm:justify-center sm:self-center sm:col-span-1 gap-x-2 sm:gap-x-4">
					<Image
						src={image[0].image_url}
						alt={image[0].image_alt}
						width={35}
						height={35}
						className="aspect-square"
					/>
					<span className="text-xl font-semibold uppercase sm:text-lg md:text-xl">
						RC Rouen
					</span>
				</div>

				{getFooterMenu({ name: "Menu", arr: menu })}
				{getFooterMenu({ name: "Support", arr: support })}
				{getFooterMenu({ name: "Legal", arr: legal })}
			</div>
			<div className="flex flex-col items-center justify-center w-full py-3 text-xs font-light text-white sm:text-sm bg-primary gap-y-2 md:px-8 md:gap-y-0 md:flex-row md:justify-between">
				<p className="text-slate-200">
					&#169; Racing Club de Rouen - {date} - All rights reserved
				</p>
				<div className="flex  gap-[10px] justify-center items-center">
					<Link href="https://www.instagram.com/">
						<AiFillInstagram
							className="cursor-pointer text-slate-200 hover:text-slate-50"
							size={22}
						/>
					</Link>
					<Link href="https://twitter.com/">
						<FaXTwitter
							className="cursor-pointer text-slate-200 hover:text-slate-50"
							size={20}
						/>
					</Link>
					<Link href="https://facebook.com/">
						<FaFacebook
							className="cursor-pointer text-slate-200 hover:text-slate-50"
							size={20}
						/>
					</Link>
				</div>
			</div>
		</>
	)
}
export default Footer
