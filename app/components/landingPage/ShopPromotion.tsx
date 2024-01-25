import Image, { StaticImageData } from "next/image"
import Link from "next/link"

type ShopPromotionProps = {
	image: string | StaticImageData
	title: string
	buttonText: string
}

const ShopPromotion = ({ image, title, buttonText }: ShopPromotionProps) => {
	return (
		<Link
			href="/shop"
			className="bg-white flex flex-col gap-y-3  justify-center items-center px-4 lg:px-10 py-10"
		>
			<Image
				src={image}
				alt="test"
				width={1400}
				height={788}
				className="aspect-3/2 max-h-96 "
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
