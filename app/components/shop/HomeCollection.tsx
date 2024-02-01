import {
	GlobalConfigImage,
	GlobalConfigImagesApiResponse,
} from "@/sanity/types/GlobalConfigImages"
import Image from "next/image"
import Link from "next/link"

type HomeCollectionProps = {
	image: GlobalConfigImage
	title: string
	buttonText: string
}

const HomeCollection = ({ image, title, buttonText }: HomeCollectionProps) => {
	return (
		<Link
			href=""
			className="bg-white flex flex-col gap-y-3 justify-center items-center"
		>
			<Image
				src={image.image_url}
				alt={image.image_alt}
				width={501}
				height={334}
				className="aspect-3/2"
			/>
			<h2 className="font-bold text-lg sm:text-2xl tracking-wide capitalize text-center">
				{title}
			</h2>
			<button
				type="button"
				className="bg-primary py-2 px-4 text-white hover:bg-primary-dark font-light"
			>
				{buttonText}
			</button>
		</Link>
	)
}
export default HomeCollection
