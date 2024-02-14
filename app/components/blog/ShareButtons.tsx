"use client"

import { usePathname } from "next/navigation"
import { HTMLProps } from "react"
import {
	FacebookIcon,
	FacebookShareButton,
	TwitterShareButton,
	XIcon,
	WhatsappShareButton,
	WhatsappIcon,
	TelegramShareButton,
	TelegramIcon,
	LinkedinShareButton,
	LinkedinIcon,
} from "react-share"
type ShareButtonsProps = {
	size: number
	gap?: HTMLProps<HTMLElement>["className"]
}
const ShareButtons = ({ size, gap = "gap-x-0.5" }: ShareButtonsProps) => {
	const pathname = usePathname()
	return (
		<div className={`flex items-center ${gap}`}>
			<FacebookShareButton
				url={`${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`}
			>
				<FacebookIcon round size={size} />
			</FacebookShareButton>
			<TwitterShareButton
				url={`${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`}
			>
				<XIcon round size={size} />
			</TwitterShareButton>
			<WhatsappShareButton
				url={`${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`}
			>
				<WhatsappIcon round size={size} />
			</WhatsappShareButton>
			<LinkedinShareButton
				url={`${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`}
			>
				<LinkedinIcon round size={size} />
			</LinkedinShareButton>
			<TelegramShareButton
				url={`${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`}
			>
				<TelegramIcon round size={size} />
			</TelegramShareButton>
		</div>
	)
}
export default ShareButtons
