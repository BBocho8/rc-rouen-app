import getFormattedPrice from "@/app/utils/getFormattedPrice"
import { Product } from "@/sanity/types/Product"
import Image from "next/image"
import Link from "next/link"

type ProductProps = {
	product: Product
}

const Product = ({ product }: ProductProps) => {
	return (
		<div>
			<Link href={`/shop/${product.slug}`}>
				<div className="product-card">
					<Image
						src={product.image[0].url}
						alt={product.image[0].alt}
						width={250}
						height={250}
						className="product-image "
					/>
					<p className="product-name px-2">{product.name}</p>
					<p className="product-price px-2">
						{getFormattedPrice(product.price)}
					</p>
				</div>
			</Link>
		</div>
	)
}
export default Product
