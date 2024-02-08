"use client"
import { Product, Size } from "@/app/types/admin-dashboard/product"
import Link from "next/link"
import {
	ChangeEvent,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from "react"
import FormInput from "../landingPage/contact/ContactFormInput"
import SubmitBtn from "../landingPage/contact/ContactFormSubmitBtn"
import { set } from "sanity"
import { create } from "domain"
import { createProductSanity } from "@/sanity/sanity-utils"
import { nanoid } from "nanoid"
import { toast } from "react-toastify"

type ProductCategoryCardProps = {
	text: string
	seeAllProducts: boolean
	setSeeAllProducts: Dispatch<SetStateAction<boolean>>
	seeCreateNewProduct: boolean
	setSeeCreateNewProduct: Dispatch<SetStateAction<boolean>>
}

function ProductCategoryCard({
	text,
	seeAllProducts,
	setSeeAllProducts,
	seeCreateNewProduct,
	setSeeCreateNewProduct,
}: ProductCategoryCardProps) {
	const handleProducts = () => {
		setSeeAllProducts(!seeAllProducts)
		setSeeCreateNewProduct(false)
	}

	const handleCreate = () => {
		setSeeCreateNewProduct(true)
		setSeeAllProducts(false)
	}
	if (text === "SEE ALL PRODUCTS") {
		return (
			<button
				key={text}
				className="bg-primary text-white p-10  flex justify-center items-center"
				onClick={handleProducts}
			>
				<span className="font-bold text-xl">
					{seeAllProducts ? "HIDE ALL PRODUCTS" : text}
				</span>
			</button>
		)
	} else {
		return (
			<button
				key={text}
				onClick={handleCreate}
				className="bg-primary text-white p-10  flex justify-center items-center"
			>
				<Link href="#">
					<span className="font-bold text-xl">{text}</span>
				</Link>
			</button>
		)
	}
}

type createNewProductProps = {
	seeCreateNewProduct: boolean
	setSeeCreateNewProduct: Dispatch<SetStateAction<boolean>>
	newProduct: Product
	setNewProduct: Dispatch<SetStateAction<Product>>
}

function CreateNewProduct({
	seeCreateNewProduct,
	setSeeCreateNewProduct,
	newProduct,
	setNewProduct,
}: createNewProductProps) {
	const sizes: Size[] = ["xs", "s", "m", "l", "xl", "2xl", "3xl"]
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isProductReady, setIsProductReady] = useState(false)

	const handleImages = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const files = (e.target as HTMLInputElement).files

		if (files) {
			if (files.length > 4) {
				e.target.value = ""
				alert("You can only upload 4 images max")
			} else {
				setNewProduct({ ...newProduct, images: files })
				console.log(files)
			}
		}
	}

	useEffect(() => {
		if (isProductReady) {
			setIsSubmitting(true)
			createProductSanity(newProduct)
				.then((res) => {
					setIsSubmitting(false)
					toast.success("Product created successfully")
					setIsProductReady(false)
					setNewProduct({
						slug: nanoid(),
						name: "",
						price: 0,
						discounted_price: 0,
						expedition: 3,
						in_stock: false,
						is_discounted: false,
						description: "",
						images: null,
						details: [""],

						sizes: [],
					})
				})
				.catch((error) => {
					console.log("Error during the creation of the product", error)
				})
		} else {
			return
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isProductReady, newProduct])

	return (
		seeCreateNewProduct && (
			<div className="my-16">
				<form
					className="flex flex-col gap-y-4 justify-center items-center "
					onSubmit={(e) => {
						e.preventDefault()
						setIsProductReady(true)
						console.log(newProduct)
					}}
				>
					<div className="w-1/2 flex flex-col ">
						<label
							htmlFor="is_in_stock"
							className="capitalize text-sm tracking-wide  px-1 mb-2"
						>
							Is in stock
						</label>
						<select
							id="is_in_stock"
							className="w-24  border rounded-lg py-2 px-2 focus:outline-none focus:border-primary-bright"
							defaultValue="no"
							onChange={(e) => {
								if (e.target.value === "yes") {
									setNewProduct({
										...newProduct,
										in_stock: true,
									})
								} else {
									setNewProduct({
										...newProduct,
										in_stock: false,
									})
								}
							}}
						>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
					<div className="w-1/2">
						<FormInput
							disabled={true}
							label="slug: (unique identifier without space)"
							name="slug"
							type="text"
							id="slug"
							autoComplete="off"
							// onChange={(e) =>
							// 	setNewProduct({ ...newProduct, slug: e.target.value })
							// }
							value={newProduct.slug}
							required
						/>
					</div>
					<div className="w-1/2">
						<FormInput
							label="name:"
							name="name"
							type="text"
							id="name"
							autoComplete="off"
							onChange={(e) =>
								setNewProduct({ ...newProduct, name: e.target.value })
							}
							value={newProduct.name}
							required
						/>{" "}
					</div>
					<div className="w-1/2">
						<FormInput
							label="description:"
							name="description"
							type="text"
							id="description"
							autoComplete="off"
							onChange={(e) =>
								setNewProduct({ ...newProduct, description: e.target.value })
							}
							value={newProduct.description}
							required
						/>{" "}
					</div>
					<div className="w-1/2">
						<FormInput
							label="details: (separated by ;)"
							name="details"
							type="text"
							id="details"
							autoComplete="off"
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									details: e.target.value.split(";"),
								})
							}
							value={newProduct.details.join(";")}
							required
						/>{" "}
					</div>
					<div className="w-1/2">
						<FormInput
							label="price:"
							name="price"
							type="number"
							id="price"
							autoComplete="off"
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									price: +e.target.value,
								})
							}
							value={newProduct.price}
							required
						/>{" "}
					</div>
					<div className="w-1/2 flex flex-col ">
						<label
							htmlFor="is_discounted"
							className="capitalize text-sm tracking-wide  px-1 mb-1"
						>
							Is Discounted
						</label>
						<select
							id="is_discounted"
							className="w-24  border rounded-lg py-2 px-2 focus:outline-none focus:border-primary-bright"
							defaultValue="no"
							onChange={(e) => {
								if (e.target.value === "yes") {
									setNewProduct({
										...newProduct,
										is_discounted: true,
									})
								} else {
									setNewProduct({
										...newProduct,
										is_discounted: false,
									})
								}
							}}
						>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
					<div className="w-1/2">
						<FormInput
							label="discounted price:"
							name="discounted_price"
							type="number"
							id="discounted_price"
							autoComplete="off"
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									discounted_price: +e.target.value,
								})
							}
							value={newProduct.discounted_price}
							required
						/>{" "}
					</div>
					<div className="w-1/2">
						<FormInput
							label="expedition: (in days)"
							name="expedition"
							type="number"
							id="exp"
							autoComplete="off"
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									expedition: +e.target.value,
								})
							}
							value={newProduct.expedition}
							required
						/>{" "}
					</div>
					<div className="w-1/2">
						<p className="capitalize text-sm tracking-wide  px-1">
							Sizes availables:
						</p>
						<div className="flex justify-center items-center gap-x-2 my-2">
							{sizes.map((size) => (
								<div key={size}>
									<input
										type="checkbox"
										name={size}
										value={size}
										className="w-3 h-3"
										onChange={(e) => {
											if (e.target.checked) {
												setNewProduct({
													...newProduct,
													sizes: [...newProduct.sizes, size],
												})
											} else {
												setNewProduct({
													...newProduct,
													sizes: newProduct.sizes.filter((s) => s !== size),
												})
											}
										}}
									/>
									<label htmlFor={size} className="px-1 text-sm">
										{size.toUpperCase()}
									</label>
								</div>
							))}
						</div>
					</div>
					<div className="w-1/2">
						<p className="capitalize text-sm tracking-wide mb-1 px-1">
							Images:{" "}
							<span className="text-red-400 font-medium">(4 maximum)</span>
						</p>
						<input
							onChange={handleImages}
							type="file"
							accept="image/png, image/gif, image/jpeg"
							multiple
							max={4}
						></input>
					</div>

					<SubmitBtn
						text="CREATE PRODUCT"
						isSubmitting={isSubmitting}
						submitText="Creating..."
					/>
				</form>
			</div>
		)
	)
}

const ProductLandingPage = () => {
	const [seeAllProducts, setSeeAllProducts] = useState(false)
	const [seeCreateNewProduct, setSeeCreateNewProduct] = useState(false)
	const categories = ["NEW PRODUCT", "SEE ALL PRODUCTS"]
	const [newProduct, setNewProduct] = useState<Product>({
		slug: nanoid(),
		name: "",
		price: 0,
		discounted_price: 0,
		expedition: 3,
		in_stock: false,
		is_discounted: false,
		description: "",
		images: null,
		details: [""],

		sizes: [],
	})

	return (
		<div>
			<div className="flex justify-center items-center gap-x-8 my-4 ">
				{categories.map((category) => (
					<ProductCategoryCard
						key={category}
						text={category}
						seeAllProducts={seeAllProducts}
						setSeeAllProducts={setSeeAllProducts}
						seeCreateNewProduct={seeCreateNewProduct}
						setSeeCreateNewProduct={setSeeCreateNewProduct}
					/>
				))}
			</div>
			{seeAllProducts && "here are the products"}
			{seeCreateNewProduct && (
				<CreateNewProduct
					seeCreateNewProduct={seeCreateNewProduct}
					setSeeCreateNewProduct={setSeeCreateNewProduct}
					newProduct={newProduct}
					setNewProduct={setNewProduct}
				/>
			)}
		</div>
	)
}
export default ProductLandingPage
