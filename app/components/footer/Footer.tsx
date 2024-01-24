"use client"
import getFooterMenu from "@/app/utils/footer/getFooterMenu"
import { useState } from "react"
import { RiArrowRightLine, RiInstagramFill } from "react-icons/ri"
import {
	FaCcApplePay,
	FaCcMastercard,
	FaCcPaypal,
	FaCcVisa,
	FaSquareXTwitter,
} from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa"
import Link from "next/link"
import jsonp from "jsonp"
import { toast } from "react-toastify"
import Error from "next/error"

const menu = [
	{ name: "Shop All", link: "/shop" },
	{ name: "About Us", link: "/about" },
	{ name: "équipe Première", link: "/first-team" },
]

const support = [
	{ name: "Refund", link: "/refund" },
	{ name: "Help & FAQ", link: "/help" },
	{ name: "Contact", link: "/contact" },
	{ name: "Refund", link: "/refund-test" },
	{ name: "Refund", link: "/refund-second" },
]

const social = [
	{
		name: "Facebook",
		link: "https://www.instagram.com/",
		icon: <FaFacebookSquare size={40} className=" " />,
	},
	{
		name: "Twitter",
		link: "https://www.instagram.com/",
		icon: <FaSquareXTwitter size={40} className=" " />,
	},
	{
		name: "Instagram",
		link: "https://www.instagram.com/",
		icon: <RiInstagramFill size={40} className=" " />,
	},
]
const paymentMethods = [
	{
		name: "Paypal",
		icon: <FaCcPaypal size={40} className=" text-gray-500" />,
	},
	{
		name: "Visa",
		icon: <FaCcVisa size={40} className="text-gray-500 " />,
	},
	{
		name: "Mastercard",
		icon: <FaCcMastercard size={40} className=" text-gray-500" />,
	},
	{
		name: "Apple Pay",
		icon: <FaCcApplePay size={40} className=" text-gray-500" />,
	},
]

const Footer = () => {
	//TODO: Regex for email
	const [email, setEmail] = useState<string>("")

	const handleNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			const url =
				"https://gmail.us21.list-manage.com/subscribe/post-json?u=8dea8a733c5578eea005bfb23&amp;id=dff9fc0e9e&amp;f_id=00f2f5e6f0"
			jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, data) => {
				const { msg, result } = data
				// do something with response

				setEmail("")
				toast.success("Inscription à la newsletter complétée avec succès")
			})
		} catch (error) {
			console.log(error)
			toast.error("Erreur lors de l'inscription à la newsletter")
		}
	}

	return (
		<div className="grid py-16 px-8 gap-y-8">
			<div className="flex gap-x-3 justify-center group-indeterminate:">
				{social.map((item) => {
					return (
						<div key={item.name}>
							<Link href={item.link}>{item.icon}</Link>
						</div>
					)
				})}
			</div>
			<div className="flex flex-col gap-y-8  mx-auto">
				<p className="text-center text-4xl font-light">
					Pour recevoir directement les dernières informations du club dans ta
					boîte mail.
				</p>
				<form
					onSubmit={(e) => handleNewsletter(e)}
					className="flex w-3/4 relative  mx-auto"
				>
					<button type="submit">
						<RiArrowRightLine
							size={25}
							className=" text-black min-w-10 text-center absolute right-0 top-0 z-[1] "
						/>
					</button>
					<input
						type="email"
						name="EMAIL"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email Address"
						className="pl-2 border-b pb-1 border-b-black placeholder:text-black placeholder:font-bold w-full focus:outline-none"
					/>
				</form>
			</div>
			<div className="flex justify-around">
				{getFooterMenu({ name: "Menu", arr: menu })}
				{getFooterMenu({ name: "Support", arr: support })}
			</div>
			<div className="flex gap-x-3 justify-center group-indeterminate:">
				{paymentMethods.map((item) => {
					return <div key={item.name}>{item.icon}</div>
				})}
			</div>
		</div>
	)
}
export default Footer
