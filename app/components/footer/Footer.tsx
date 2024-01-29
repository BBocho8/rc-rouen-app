"use client"
import getFooterMenu from "@/app/utils/footer/getFooterMenu"
import { useState } from "react"
import { RiArrowRightLine, RiInstagramFill } from "react-icons/ri"
import {
	FaCcApplePay,
	FaCcMastercard,
	FaCcPaypal,
	FaCcVisa,
	FaFacebook,
	FaSquareInstagram,
	FaSquareXTwitter,
	FaXTwitter,
} from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa"
import Link from "next/link"
import jsonp from "jsonp"
import { toast } from "react-toastify"
import { legal, menu, support } from "./footerMenus"
import { AiFillInstagram } from "react-icons/ai"
import moment from "moment"
import Image from "next/image"

// const social = [
// 	{
// 		name: "Facebook",
// 		link: "https://www.instagram.com/",
// 		icon: <FaFacebookSquare size={40} className="" />,
// 	},
// 	{
// 		name: "Twitter",
// 		link: "https://www.instagram.com/",
// 		icon: <FaSquareXTwitter size={40} className="" />,
// 	},
// 	{
// 		name: "Instagram",
// 		link: "https://www.instagram.com/",
// 		icon: <RiInstagramFill size={40} className="" />,
// 	},
// ]
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

const Footer = () => {
	const date = moment().year()

	return (
		<>
			<div className="grid items-start justify-start grid-cols-2 px-4 py-8 mx-auto sm:grid-cols-4 gap-x-2 gap-y-4 bg-gray-50">
				<div className="flex items-center justify-start col-span-2 sm:justify-center sm:self-center sm:col-span-1 gap-x-2 sm:gap-x-4">
					<Image
						src="/logoTest.png"
						alt="Logo"
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
					&#169;Racing Club de Rouen - {date} - All rights reserved
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
