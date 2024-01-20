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
import { MenuItem, Select } from "@mui/material"
import { twMerge } from "tailwind-merge"
import ProductPageAccordion from "./ProductPageAccordion"

type ProductDetailsProps = {
	product: ProductType
	products: ProductType[]
}

const allSizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"]

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
	const { decQty, incQty, qty, setQty, onAdd, setShowCart, size, setSize } =
		useStateContext()
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
				<div className="product-detail-desc flex flex-col items-start px-2">
					<h1 className="uppercase font-medium text-base ">{name}</h1>
					<div className="flex items-center gap-x-1 ">
						<div className="flex text-primary-dark my-2 text-sm">
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
						<div className="my-2">
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
						<p className="text-sm font-medium my-2">
							Prix:{" "}
							<span className="font-semibold text-xl text-primary-bright">
								{getFormattedPrice(price)}
							</span>
						</p>
					)}

					<div className="my-8 flex flex-col gap-y-2 p-4 bg-gray-100 w-full">
						<div className="flex flex-col gap-y-1">
							<span className="font-medium text-sm tracking-wide">
								Tailles:
							</span>

							<ul className="flex flex-row flex-wrap gap-x-1 gap-y-2 justify-start items-center">
								{allSizes.map((taille) => (
									<li key={taille} className="">
										<button
											type="button"
											onClick={() => setSize(taille.toLowerCase())}
											className={twMerge(
												taille.toLowerCase() !== size
													? "rounded-sm bg-white text-black border border-black py-0.5 px-3 hover:bg-gray-200 transition-all"
													: "rounded-sm bg-black text-white border border-black py-0.5 px-3 transition-all"
											)}
										>
											<span className="uppercase">{taille}</span>
										</button>
									</li>
								))}
							</ul>
							{/* <button className="rounded-sm bg-white text-body border border-body py-1 px-2">
									XS
								</button>
								<button>S</button>
								<button>M</button>
								<button>L</button>
								<button>XL</button> */}
						</div>
						<div className="flex flex-col gap-y-1">
							<span className="font-medium text-sm tracking-wide">
								Quantité:
							</span>
							<div className="flex justify-between gap-x-4">
								<Select
									size="small"
									value={qty}
									sx={{ minWidth: "80px" }}
									onChange={(e) => setQty(e.target.value as number)}
									displayEmpty
									inputProps={{ "aria-label": "Without label" }}
								>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
									<MenuItem value={4}>4</MenuItem>
									<MenuItem value={5}>5</MenuItem>
								</Select>
								<button
									type="button"
									// className="add-to-cart grow"
									className=" overflow-hidden whitespace-nowrap py-1 px-4 bg-primary-bright text-white text-base font-medium uppercase  hover:bg-primary transition-all grow"
									onClick={() => onAdd(product, qty)}
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>

					<ProductPageAccordion />

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
