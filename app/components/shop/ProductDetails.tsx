"use client"

import { Product as ProductType, Size } from "@/sanity/types/Product"
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
import BreadCrumbsProduct from "./BreadCrumbsProduct"
import getFormattedPrice from "@/app/utils/getFormattedPrice"
import { Divider, MenuItem, Select } from "@mui/material"
import { twMerge } from "tailwind-merge"
import ProductPageAccordion from "./ProductPageAccordion"
import { TbPointFilled } from "react-icons/tb"
import { toast } from "react-toastify"

type ProductDetailsProps = {
	product: ProductType
	products: ProductType[]
}

const allSizes: Size[] = ["xs", "s", "m", "l", "xl", "2xl", "3xl"]

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
	// const handleBuyNow = () => {
	// 	onAdd(product, qty)

	// 	setShowCart(true)
	// }

	const handleAddToCart = () => {
		if (sizes && !size) return toast.error("Veuillez choisir une taille")
		product.size = size
		onAdd(product, qty)
	}

	return (
		<div>
			<BreadCrumbsProduct productName={product.name} />
			<div className="grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 mx-auto gap-y-4 sm:gap-y-0">
				<div className="md:col-span-3 lg:col-span-2">
					<Image
						width={600}
						height={600}
						priority
						src={image[index].url}
						alt={image[index].alt}
						className="w-[400px] lg:w-[600px] bg-white cursor-pointer transition-all duration-300 ease-in-out mx-auto object-cover aspect-square"
					/>

					<div className=" flex justify-center gap-2.5 mt-5 ">
						{image.map((image, i) => (
							<Image
								width={80}
								height={80}
								priority
								key={i}
								src={image.url}
								alt={image.alt}
								className="bg-white cursor-pointer rounded-lg border border-gray-100 p-1 hover:bg-gray-100 w-[65px] lg:w-[80px] aspect-square"
								onMouseEnter={() => setIndex(i)}
							/>
						))}
					</div>
					<Divider className="sm:hidden w-4/5 mx-auto mt-4 " />
				</div>
				<div className="product-detail-desc flex flex-col items-start sm:px-2 md:col-span-2 lg:col-span-1">
					<h1 className="px-2 sm:px-0 uppercase font-medium text-base ">
						{name}
					</h1>
					<div className="px-2 sm:px-0 flex items-center gap-x-1 ">
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
						<p className="text-green-600 text-sm font-medium px-2 sm:px-0">
							En stock - Ce produit sera expédié dans les {expedition} prochains
							jours{" "}
						</p>
					) : (
						<p className="text-red-600 text-sm font-medium px-2 sm:px-0">
							Pas de stock disponible pour cet article
						</p>
					)}
					{is_discounted ? (
						<div className="my-2 px-2 sm:px-0">
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
						<p className="text-sm font-medium my-2 px-2 sm:px-0">
							Prix:{" "}
							<span className="font-semibold text-xl text-primary-bright">
								{getFormattedPrice(price)}
							</span>
						</p>
					)}
					<div className="my-2 flex flex-col gap-y-2 p-4 bg-gray-100 w-full">
						<div className="flex flex-col gap-y-1">
							<span className="font-medium text-sm tracking-wide">
								Tailles:
							</span>

							<ul className="flex flex-row flex-wrap gap-x-1 gap-y-2 justify-start items-center">
								{allSizes
									// .filter((size) => product.sizes.includes(size))
									.map((taille) => (
										<li key={taille}>
											<button
												type="button"
												onClick={() => setSize(taille)}
												disabled={!sizes?.includes(taille)}
												className={twMerge(
													taille.toLowerCase() !== size
														? "tracking-wider rounded-sm bg-white text-black border border-black py-0.5 px-3 hover:bg-gray-200 transition-all"
														: "tracking-wider rounded-sm bg-black text-white border border-black py-0.5 px-3 transition-all",
													" disabled:border-gray-300 disabled:text-gray-400"
												)}
											>
												<span className="uppercase">{taille}</span>
											</button>
										</li>
									))}
							</ul>
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
									className=" overflow-hidden whitespace-nowrap py-1 px-4 bg-primary-bright text-white text-base font-medium uppercase  hover:bg-primary transition-all grow"
									onClick={handleAddToCart}
								>
									Add to cart
								</button>
							</div>
						</div>
					</div>
					<ProductPageAccordion title="Livraison">
						<p>
							Cet article sera expédié dans les {product.expedition} prochains
							jours ouvrés.
						</p>
					</ProductPageAccordion>
					<ProductPageAccordion title="Détails">
						<ul>
							{product.details.map((item) => {
								return (
									<li
										key={item}
										className="flex gap-x-1 items-center justify-start"
									>
										<span>
											<TbPointFilled />
										</span>
										{item}
									</li>
								)
							})}
						</ul>
					</ProductPageAccordion>
					<ProductPageAccordion title="Description">
						<p>{product.description}</p>
					</ProductPageAccordion>
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
