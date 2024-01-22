import { useStateContext } from "@/app/context/StateContext"
import getStripe from "@/app/utils/getStripe"
import { toast } from "react-toastify"
import { twMerge } from "tailwind-merge"
import styles from "./Cart.module.css"
import Image from "next/image"
import getFormattedPrice from "@/app/utils/getFormattedPrice"
import { FaCcStripe, FaChevronLeft } from "react-icons/fa6"
import ConfirmDialog from "./ConfirmDialog"
import { GoTrash } from "react-icons/go"
import { AiOutlineShopping } from "react-icons/ai"

const DesktopCart = () => {
	const { cartItems, totalPrice, onRemove, setShowCart } = useStateContext()

	const handleCheckout = async () => {
		const stripe = await getStripe()

		const response = await fetch("/api/stripe", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(cartItems),
		})

		if (response.status === 500) return

		const data = await response.json()

		toast.loading("Redirecting...")

		stripe.redirectToCheckout({ sessionId: data.session.id })
	}
	return (
		<section
			className={twMerge(
				styles["desktop-cart-container"],
				styles["slide-in-top"],
				"hidden sm:block"
			)}
		>
			{cartItems.length < 1 ? (
				<div className="flex flex-col justify-center items-center grow gap-y-4 bg-white">
					<AiOutlineShopping size={150} />
					<h3 className="font-medium text-lg tracking-wide">
						Your shopping bag is empty...
					</h3>

					<button
						type="button"
						onClick={() => setShowCart(false)}
						className="bg-primary text-white px-4 py-2 rounded-md uppercase font-medium"
					>
						Continue Shopping
					</button>
				</div>
			) : (
				<>
					<div className="bg-white h-full max-w-3xl mx-auto">
						<p
							onClick={() => setShowCart(false)}
							title="Close cart"
							className="flex justify-normal items-center gap-x-1  mb-6    rounded-md cursor-pointer text-gray-600 hover:text-black hover:font-medium "
						>
							<FaChevronLeft size={25} />
							<span>Back to shopping</span>
						</p>

						<div className="flex justify-between items-center">
							<h2 className="uppercase text-2xl font-semibold text-primary-dark line-clamp-2">
								Shopping cart
							</h2>
							<div className="pr-4">
								<ConfirmDialog />
							</div>
						</div>
						<table className="table-auto w-full border-collapse my-6 ">
							<thead>
								<tr className="border-b border-b-gray-300">
									<th className="table-header">Produit</th>
									<th className="table-header">Quantité</th>
									<th className="table-header">Taille</th>
									<th className="table-header  pl-16">Prix</th>
									<th className="table-header  pl-16"></th>
								</tr>
							</thead>
							<tbody>
								{cartItems.map((item) => {
									return (
										<tr
											key={`${item._id}-${item.size}}`}
											className="bg-gray-100"
										>
											<td>
												<div className="flex justify-start items-center gap-x-4 py-4 px-8">
													<Image
														src={item.image[0].url}
														alt={item.image[0].alt}
														height={75}
														width={75}
														className="aspect-square"
													/>
													<p className="text-lg font-light tracking-wide  ">
														{item.name}
													</p>
												</div>
											</td>
											<td className="table-data">{item.quantity}</td>
											<td className="table-data">{item.size}</td>
											<td className="table-data text-lg pl-16">
												{item.is_discounted
													? getFormattedPrice(
															(item.discounted_price as number) *
																item.quantity! || 0
													  )
													: getFormattedPrice(item.price * item.quantity!)}
											</td>
											<td>
												<div
													className="flex justify-center items-center cursor-pointer "
													onClick={() => onRemove(item)}
													title="Supprimer"
												>
													<GoTrash size={20} />
												</div>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
						<div className="flex flex-col items-end justify-center px-8 ">
							<div className="flex flex-col items-center justify-center gap-y-2">
								<p className="text-right  text-lg font-medium tracking-wide text-primary-dark">
									Prix total : <span>{getFormattedPrice(totalPrice)}</span>
								</p>

								<button
									className="w-48 uppercase text-base font-bold text-white bg-primary-dark   py-2  cursor-pointer hover:bg-primary"
									onClick={handleCheckout}
								>
									BUY NOW
								</button>
								<p className="flex justify-center items-center gap-x-2 text-xs font-medium">
									Secured by{" "}
									<FaCcStripe size={30} className="text-primary-dark" />
								</p>
							</div>
						</div>
					</div>
				</>
			)}
		</section>
	)
}
export default DesktopCart
