import { Banner } from "@/sanity/types/Banner"
import Image from "next/image"
import Link from "next/link"

type HeroBannerProps = {
	heroBanner: Banner
}

const HeroBanner = ({ heroBanner }: HeroBannerProps) => {
	return (
		<div className="hero-banner-container">
			<div>
				<p className="beats-solo">{heroBanner.smallText}</p>
				<h3>{heroBanner.midText}</h3>
				<h1>{heroBanner.largeText1}</h1>
				<Image
					width={450}
					height={450}
					src={heroBanner.image_url}
					alt={heroBanner.image_alt}
					className="hero-banner-image"
				/>
				<div>
					<Link href={`/product/${heroBanner.product}`}>
						<button type="button">{heroBanner.buttonText}</button>
					</Link>
					<div className="desc">
						<h5>Description</h5>
						<p>{heroBanner.desc}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default HeroBanner
