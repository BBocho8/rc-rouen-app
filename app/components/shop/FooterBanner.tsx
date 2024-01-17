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
		<div className="footer-banner-container">
			<div className="banner-desc">
				<div className="left">
					<p>{discount}</p>
					<h3>{largeText1}</h3>
					<h3>{largeText2}</h3>
					<p>{saleTime}</p>
				</div>
				<div className="right">
					<p>{smallText}</p>
					<h3>{midText}</h3>
					<p>{desc}</p>
					<Link href={`/product/${product}`}>
						<button type="button">{buttonText}</button>
					</Link>
				</div>

				<Image
					src={footerBanner.image_url}
					alt={footerBanner.image_alt}
					className="footer-banner-image"
					width={450}
					height={450}
				/>
			</div>
		</div>
	)
}
export default FooterBanner
