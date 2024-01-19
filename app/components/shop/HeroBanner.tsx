import { Banner } from "@/sanity/types/Banner"
import Image from "next/image"
import Link from "next/link"

type HeroBannerProps = {
	heroBanner: Banner
}

const HeroBanner = ({ heroBanner }: HeroBannerProps) => {
	return (
		<div className="px-10 py-24 bg-gray-200  relative h-[500px] w-full leading-[0.9]">
			<div>
				<p className="text-[20px]">{heroBanner.smallText}</p>
				<h3 className="text-[4rem] mt-1">{heroBanner.midText}</h3>
				<h1 className="text-white text-[10em] ml-[-20px] uppercase">
					{heroBanner.largeText1}
				</h1>
				<Image
					width={450}
					height={450}
					src={heroBanner.image_url}
					alt={heroBanner.image_alt}
					className="absolute top-0 right-[20%] "
				/>
				<div>
					<Link href={`/product/${heroBanner.product}`}>
						<button
							type="button"
							className="rounded-[15px] px-4 py-[10px] bg-primary text-white border-none mt-10 text-[18px] font-semibold cursor-pointer z-[1000]"
						>
							{heroBanner.buttonText}
						</button>
					</Link>
					<div className="absolute right-[10%] bottom-[5%] w-[300px] leading-[1.3] flex flex-col text-complementary-dark">
						<h5 className="mb-3 text-[16px] font-semibold text-right">
							Description
						</h5>
						<p className="text-[#5f5f5f] font-light text-right">
							{heroBanner.desc}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default HeroBanner
