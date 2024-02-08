"use client"
import { MdDelete, MdEdit } from "react-icons/md"
import SubmitBtn from "../landingPage/contact/ContactFormSubmitBtn"
import { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import { Product } from "@/app/types/admin-dashboard/product"
import FormInput from "../landingPage/contact/ContactFormInput"
import { Size } from "@/sanity/types/Product"
import { toast } from "react-toastify"
import { deleteProductSanity, updateProductSanity } from "@/sanity/sanity-utils"

type SingleProductProps = {
	product: Product
}

const SingleProduct = ({ product }: SingleProductProps) => {
	const [newProduct, setNewProduct] = useState<Product>({
		slug: product.slug,
		name: product.name,
		price: product.price,
		discounted_price: product.discounted_price,
		expedition: product.expedition,
		in_stock: product.in_stock,
		is_discounted: product.is_discounted,
		description: product.description,
		images: null,
		details: product.details,

		sizes: product.sizes,
	})
	const sizes: Size[] = ["xs", "s", "m", "l", "xl", "2xl", "3xl"]
	const [isDisabled, setIsDisabled] = useState(true)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isUpdateReady, setIsUpdateReady] = useState(false)
	const [isRemoveReady, setIsRemoveReady] = useState(false)

	useEffect(() => {
		if (isUpdateReady) {
			setIsSubmitting(true)
			updateProductSanity(newProduct, product._id as string)
				.then((res) => {
					setIsSubmitting(false)
					toast.success("Product updated successfully")
					setIsUpdateReady(false)
					setIsDisabled(true)
				})
				.catch((error) => {
					console.log("Error during the creation of the product", error)
				})
		} else {
			return
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isUpdateReady, newProduct])
	useEffect(() => {
		if (isRemoveReady) {
			setIsSubmitting(true)
			deleteProductSanity(product._id as string)
				.then((res) => {
					setIsSubmitting(false)
					toast.success("Product deleted successfully")
					setIsRemoveReady(false)
				})
				.catch((error) => {
					console.log("Error during the creation of the product", error)
				})
		} else {
			return
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isRemoveReady, newProduct])

	return (
		<div className="flex flex-col my-4 items-center justify-center shadow-md w-2/3 px-8 py-4">
			<div className=" flex flex-col self-end gap-y-2">
				<button
					title="Edit Product"
					className="cursor-pointer flex justify-end items-center"
					onClick={() => setIsDisabled(!isDisabled)}
				>
					<p className="font-light text-xs tracking-wide">Edit Product: </p>
					<MdEdit size={20} />
				</button>
				<button
					title="Remove Product"
					className="cursor-pointer flex justify-end items-center"
					onClick={() => {
						if (
							confirm(
								"Are you sure you want to delete this product? - Irreversible action!"
							)
						) {
							setIsUpdateReady(true)
						} else {
							return
						}
					}}
				>
					<p className="font-light text-xs tracking-wide">Remove Product: </p>
					<MdDelete size={20} />
				</button>
			</div>
			<form
				className="flex flex-col gap-y-4 justify-center items-center w-full"
				onSubmit={(e) => {
					if (
						confirm(
							"Are you sure you want to update this product? - Irreversible action!"
						)
					) {
						e.preventDefault()
						setIsUpdateReady(true)
					} else {
						return
					}
				}}
			>
				<div className="w-full flex flex-col ">
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
						disabled={isDisabled}
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
				<div className="w-full">
					<FormInput
						label="slug: (unique identifier without space)"
						name="slug"
						type="text"
						id="slug"
						disabled={true}
						autoComplete="off"
						// onChange={(e) =>
						// 	setNewProduct({ ...newProduct, slug: e.target.value })
						// }
						value={newProduct.slug}
						required
					/>
				</div>
				<div className="w-full">
					<FormInput
						label="name:"
						name="name"
						type="text"
						id="name"
						disabled={isDisabled}
						autoComplete="off"
						onChange={(e) =>
							setNewProduct({ ...newProduct, name: e.target.value })
						}
						value={newProduct.name}
						required
					/>{" "}
				</div>
				<div className="w-full">
					<FormInput
						label="description:"
						name="description"
						type="text"
						disabled={isDisabled}
						id="description"
						autoComplete="off"
						onChange={(e) =>
							setNewProduct({ ...newProduct, description: e.target.value })
						}
						value={newProduct.description}
						required
					/>{" "}
				</div>
				<div className="w-full">
					<FormInput
						label="details: (separated by ;)"
						name="details"
						type="text"
						id="details"
						disabled={isDisabled}
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
				<div className="w-full">
					<FormInput
						label="price:"
						name="price"
						type="number"
						id="price"
						disabled={isDisabled}
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
				<div className="w-full flex flex-col ">
					<label
						htmlFor="is_discounted"
						className="capitalize text-sm tracking-wide  px-1 mb-1"
					>
						Is Discounted
					</label>
					<select
						id="is_discounted"
						disabled={isDisabled}
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
				<div className="w-full">
					<FormInput
						label="discounted price:"
						name="discounted_price"
						type="number"
						disabled={isDisabled}
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
				<div className="w-full">
					<FormInput
						label="expedition: (in days)"
						name="expedition"
						type="number"
						id="exp"
						disabled={isDisabled}
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
				<div className="w-full">
					<p className="capitalize text-sm tracking-wide  px-1">
						Sizes availables:
					</p>
					<div className="flex justify-center items-center gap-x-2 my-2">
						{sizes.map((size) => (
							<div key={size}>
								<input
									type="checkbox"
									name={size}
									disabled={isDisabled}
									checked={newProduct.sizes.includes(size)}
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
				{/* <div className="w-full">
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
					</div> */}

				<SubmitBtn
					text="CREATE PRODUCT"
					isSubmitting={isSubmitting}
					submitText="Creating..."
				/>
			</form>
		</div>
	)
}
export default SingleProduct
