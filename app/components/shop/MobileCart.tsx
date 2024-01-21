import { twMerge } from "tailwind-merge"
import styles from "./Cart.module.css"
import { useStateContext } from "@/app/context/StateContext"
import { FaCcStripe, FaChevronLeft } from "react-icons/fa6"
import CartItem from "./CartItem"
import getStripe from "@/app/utils/getStripe"
import { toast } from "react-toastify"
import { AiOutlineShopping } from "react-icons/ai"

const MobileCart = () => {
	const { showCart, setShowCart, cartItems } = useStateContext()

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

	// showCart && cartItems.length < 1 && ( return
	// 	<div className="empty-cart">
	// 		<AiOutlineShopping size={150} />
	// 		<h3>Your shopping bag is empty</h3>

	// 		<button type="button" onClick={() => setShowCart(false)} className="btn">
	// 			Continue Shopping
	// 		</button>
	// 	</div>
	// )
	return (
		<section
			className={twMerge(
				styles["mobile-cart-container"],
				styles["slide-in-right"],
				"sm:hidden "
			)}
		>
			<div className={twMerge(styles["mobile-cart-items-container"])}>
				{cartItems.length < 1 ? (
					<div className="flex flex-col justify-center items-center grow gap-y-4">
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
						<span
							onClick={() => setShowCart(false)}
							title="Close cart"
							className="my-10 self-start  border-2 border-gray-300 px-2 py-4 rounded-md cursor-pointer text-gray-600 "
						>
							<FaChevronLeft size={20} />
						</span>
						<div className=" flex flex-col gap-y-4 ">
							<h2 className="text-3xl font-medium text-gray-500 tracking-wider self-start normal-case px-6">
								Shopping cart{" "}
							</h2>
							<div className=" [&>*:nth-child(odd)]:bg-gray-200 [&>*:nth-child(even)]:bg-gray-100">
								{cartItems.map((product) => {
									return (
										<CartItem
											key={`${product._id}-${product.size}`}
											product={product}
										/>
									)
								})}
							</div>
						</div>
					</>
				)}
			</div>
			<div className={twMerge(styles["mobile-cart-details-container"])}>
				<p className="self-end  text-white font-medium text-lg tracking-wider">
					Total: 96.99€
				</p>
				<button
					className=" w-full uppercase text-lg font-bold text-white bg-complementary-dark  py-4 rounded-md cursor-pointer hover:bg-complementary"
					onClick={handleCheckout}
				>
					BUY NOW
				</button>
				<p className="flex justify-center items-center gap-x-2 text-xs font-medium">
					Secured by <FaCcStripe size={30} />
				</p>
			</div>
		</section>
	)
}

export default MobileCart
