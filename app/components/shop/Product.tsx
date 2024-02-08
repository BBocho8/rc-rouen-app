import getFormattedPrice from "@/app/utils/getFormattedPrice"
import { Product } from "@/sanity/types/Product"
import Image from "next/image"
import Link from "next/link"

type ProductProps = {
	product: Product
	isAdmin?: boolean
}

const Product = ({ product, isAdmin }: ProductProps) => {
	return (
		<div>
			<Link
				href={
					isAdmin
						? `/admin-dashboard/products/${product.slug}`
						: `/shop/${product.slug}`
				}
			>
				<div className="cursor-pointer hover:scale-110 transition">
					<Image
						src={product.image[0].url}
						alt={product.image[0].alt}
						width={250}
						height={250}
						className="aspect-square object-cover bg-white "
					/>
					{/* <p className="product-price px-2">
						{getFormattedPrice(product.price)}
					</p> */}
					<div className="flex flex-col my-2 pl-2">
						{product.is_discounted ? (
							<div className=" sm:px-0">
								<p className="text-sm font-medium">
									Promotion:{" "}
									<span className="font-semibold text-xl text-primary-bright">
										{getFormattedPrice(
											(product.discounted_price as number) || product.price
										)}
									</span>
								</p>
								<p className="line-through text-sm text-gray-600">
									Au lieu de: <span>{getFormattedPrice(product.price)}</span>
								</p>
							</div>
						) : (
							<p className="text-sm font-medium    sm:px-0">
								Prix:{" "}
								<span className="font-semibold text-xl text-primary-bright">
									{getFormattedPrice(product.price)}
								</span>
							</p>
						)}
						<p className="text-[0.875rem] font-medium tracking-wide line-clamp-2">
							{product.name}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}
export default Product
