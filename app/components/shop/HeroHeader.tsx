import img from "@/public/testHeroShop.jpeg"
import { GlobalConfigImagesApiResponse } from "@/sanity/types/GlobalConfigImages"
import Image from "next/image"
import Link from "next/link"
type HeroHeaderProps = {
	image: GlobalConfigImagesApiResponse
}
const HeroHeader = ({ image }: HeroHeaderProps) => {
	return (
		<div className="relative">
			<Image
				src={image[0].image_url}
				alt={image[0].image_alt}
				width={2048}
				height={1365}
				priority
				className="object-cover aspect-3/2 bg-gradient-to-r from-indigo-500 to-blue-500"
			/>
			<p className="z-1  absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]  text-white flex flex-col items-center gap-y-1 text-center w-full">
				{/* <span className="capitalize text-sm font-medium tracking-wide">
					Profitez de cette nouvelle offre aujourd'hui
				</span> */}
				<span className="text-4xl sm:text-5xl font-bold capitalize">
					Nouvelle Collection
				</span>
				<span className="text-lg font-light capitalize tracking-wide">
					Jusqu&apos;à 20% de réduction
				</span>
				<Link href="/shop">
					<button className="text-white font-semibold bg-complementary mt-4 sm:mt-6 px-6 py-2 rounded-sm hover:bg-complementary-dark hover:scale-105 transition shadow-sm">
						SHOP NOW
					</button>
				</Link>
			</p>
		</div>
	)
}
export default HeroHeader
