import { GlobalConfigImagesApiResponse } from "@/sanity/types/GlobalConfigImages"
import Image from "next/image"
import Link from "next/link"

type ShopPromotionProps = {
	image: GlobalConfigImagesApiResponse
	title: string
	buttonText: string
}

const ShopPromotion = ({ image, title, buttonText }: ShopPromotionProps) => {
	return (
		<Link
			href="/shop"
			className="bg-white flex flex-col gap-y-3  justify-center items-center  py-10 "
		>
			<Image
				src={image[0].image_url}
				alt={image[0].image_alt}
				width={1400}
				height={788}
				className="aspect-3/2 max-h-96 object-cover "
			/>
			<h2 className="font-bold text-lg sm:text-2xl tracking-wide capitalize text-center">
				{title}
			</h2>
			<button
				type="button"
				className="   text-primary hover:text-primary-dark border-b border-b-primary hover:border-b-primary-dark font-light uppercase"
			>
				{buttonText}
			</button>
		</Link>
	)
}
export default ShopPromotion
