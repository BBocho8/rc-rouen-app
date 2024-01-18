"use client"

import { Product as ProductType } from "@/sanity/types/Product"
import { Product } from "@/app/components/shop"
import Image from "next/image"
import {
	AiOutlineMinus,
	AiOutlinePlus,
	AiFillStar,
	AiOutlineStar,
} from "react-icons/ai"
import { useState } from "react"
import { useStateContext } from "@/app/context/StateContext"

type ProductDetailsProps = {
	product: ProductType
	products: ProductType[]
}

const ProductDetails = ({ product, products }: ProductDetailsProps) => {
	const { image, name, price, details } = product
	const [index, setIndex] = useState(0)
	const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext()

	const handleBuyNow = () => {
		onAdd(product, qty)

		setShowCart(true)
	}

	return (
		<div>
			<div className="product-detail-container">
				<div>
					<div className="image-container">
						<Image
							width={400}
							height={400}
							priority
							src={image[index].url}
							alt={image[index].alt}
							className="product-detail-image "
						/>
					</div>
					<div className="small-images-container">
						{image.map((image, i) => (
							<Image
								width={70}
								height={70}
								priority
								key={i}
								src={image.url}
								alt={image.alt}
								className={
									i === index ? "small-image selected-image " : "small-image "
								}
								onMouseEnter={() => setIndex(i)}
							/>
						))}
					</div>
				</div>

				<div className="product-detail-desc">
					<h1>{name}</h1>
					<div className="reviews">
						<div className="flex">
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiOutlineStar />
						</div>
						<p>(20)</p>
					</div>
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
