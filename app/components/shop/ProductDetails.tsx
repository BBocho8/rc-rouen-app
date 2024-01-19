"use client"

import { Product as ProductType } from "@/sanity/types/Product"
import { Cart, Product } from "@/app/components/shop"
import Image from "next/image"
import {
	AiOutlineMinus,
	AiOutlinePlus,
	AiFillStar,
	AiOutlineStar,
} from "react-icons/ai"
import { useState } from "react"
import { useStateContext } from "@/app/context/StateContext"
import BreadCrumbsProduct from "./BreadCrumbsProduct"
import getFormattedPrice from "@/app/utils/getFormattedPrice"

type ProductDetailsProps = {
	product: ProductType
	products: ProductType[]
}

const ProductDetails = ({ product, products }: ProductDetailsProps) => {
	const {
		image,
		name,
		price,
		details,
		is_discounted,
		description,
		expedition,
		sizes,
		discounted_price,
		in_stock,
	} = product
	const [index, setIndex] = useState(0)
	const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext()

	const handleBuyNow = () => {
		onAdd(product, qty)

		setShowCart(true)
	}

	return (
		<div>
			<BreadCrumbsProduct productName={product.name} />
			<div className="grid md:grid-cols-2 mx-auto p-10">
				<div>
					<Image
						width={400}
						height={400}
						priority
						src={image[index].url}
						alt={image[index].alt}
						className="bg-white cursor-pointer transition-all duration-300 ease-in-out mx-auto"
					/>

					<div className=" flex justify-center gap-2.5 mt-5">
						{image.map((image, i) => (
							<Image
								width={80}
								height={80}
								priority
								key={i}
								src={image.url}
								alt={image.alt}
								className="bg-white cursor-pointer rounded-lg border border-gray-100 p-1 hover:bg-gray-100"
								onMouseEnter={() => setIndex(i)}
							/>
						))}
					</div>
				</div>
				<div className="product-detail-desc flex flex-col items-start">
					<h1 className="uppercase font-medium text-base">{name}</h1>
					<div className="flex items-center gap-x-1 ">
						<div className="flex text-primary-dark">
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiOutlineStar />
						</div>
						<p>(6)</p>
					</div>
					{in_stock ? (
						<p className="text-green-600 text-sm font-medium">
							En stock - Ce produit sera expédié dans les {expedition} prochains
							jours{" "}
						</p>
					) : (
						<p className="text-red-600 text-sm font-medium">
							Pas de stock disponible pour cet article
						</p>
					)}

					{is_discounted ? (
						<div>
							<p className="text-sm font-medium">
								Promotion:{" "}
								<span className="font-semibold text-xl text-primary-bright">
									{getFormattedPrice((discounted_price as number) || price)}
								</span>
							</p>
							<p className="line-through text-sm text-gray-600">
								Au lieu de: <span>{getFormattedPrice(price)}</span>
							</p>
						</div>
					) : (
						<p className="text-sm font-medium">
							Prix:{" "}
							<span className="font-semibold text-xl text-primary-bright">
								{getFormattedPrice(price)}
							</span>
						</p>
					)}

					<h4>Details: </h4>
					<p>{details}</p>
					<p className="price">${price}</p>
					<div className="quantity">
						<h3>Quantity:</h3>
						<p className="quantity-desc">
							<span className="minus" onClick={decQty}>
								<AiOutlineMinus />
							</span>
							<span className="num">{qty}</span>
							<span className="plus" onClick={incQty}>
								<AiOutlinePlus />
							</span>
						</p>
					</div>
					<div className="buttons">
						<button
							type="button"
							className="add-to-cart"
							onClick={() => onAdd(product, qty)}
						>
							Add to Cart
						</button>
						<button type="button" className="buy-now" onClick={handleBuyNow}>
							Buy Now
						</button>
					</div>
				</div>
			</div>

			<div className="maylike-products-wrapper">
				<h2>You may also like</h2>
				<div className="marquee">
					<div className="maylike-products-container track">
						{products.map((item) => (
							<Product key={item._id} product={item} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetails
