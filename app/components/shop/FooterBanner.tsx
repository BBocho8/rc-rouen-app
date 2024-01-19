import { Banner } from "@/sanity/types/Banner"
import Image from "next/image"
import Link from "next/link"

type FooterBannerProps = {
	footerBanner: Banner
}

const FooterBanner = ({ footerBanner }: FooterBannerProps) => {
	const {
		discount,
		largeText1,
		largeText2,
		saleTime,
		smallText,
		midText,
		desc,
		buttonText,
		product,
	} = footerBanner
	return (
		<div className="px-10 py-24 bg-[#f02d34] text-white mt-28 relative h-[400px] w-full leading-[1]">
			<div className="flex justify-between">
				<div className="">
					<p className="m-[18px]">{discount}</p>
					<h3 className="font-bold text-[80px] ml-[25px]">{largeText1}</h3>
					<h3 className="font-bold text-[80px] ml-[25px]">{largeText2}</h3>
					<p className="m-[18px]">{saleTime}</p>
				</div>
				<div className="leading-[1.4]">
					<p className="text-[18px]">{smallText}</p>
					<h3 className="font-bold text-[60px]">{midText}</h3>
					<p className="text-[18px]">{desc}</p>
					<Link href={`/product/${product}`}>
						<button
							type="button"
							className="rounded-[15px] px-4 py-[10px] bg-white text-[#f02d34] border-none mt-10 text-[18px] font-medium cursor-pointer"
						>
							{buttonText}
						</button>
					</Link>
				</div>

				<Image
					src={footerBanner.image_url}
					alt={footerBanner.image_alt}
					className="absolute left-[25%] top-[-25%]"
					width={450}
					height={450}
				/>
			</div>
		</div>
	)
}
export default FooterBanner
