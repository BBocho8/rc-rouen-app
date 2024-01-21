"use client"
import React, { useRef } from "react"
import {
	AiOutlineMinus,
	AiOutlinePlus,
	AiOutlineLeft,
	AiOutlineShopping,
} from "react-icons/ai"
import { TiDeleteOutline } from "react-icons/ti"
import { MdDelete } from "react-icons/md"

import { toast } from "react-toastify"

import { useStateContext } from "@/app/context/StateContext"
import { Product } from "@/sanity/types/Product"
import Image from "next/image"
import getStripe from "@/app/utils/getStripe"
import getFormattedPrice from "@/app/utils/getFormattedPrice"
import ConfirmDialog from "./ConfirmDialog"

const Cart = () => {
	const cartRef = useRef(null)
	const {
		totalPrice,
		totalQuantities,
		cartItems,
		setCartItems,
		setShowCart,
		onRemove,
		toggleCartItemQuantity,
	} = useStateContext()

	console.log(totalPrice)
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
		<div className="cart-wrapper" ref={cartRef}>
			<div className="cart-container">
				<div className="flex justify-between items-center px-4 mt-9">
					<button
						type="button"
						className="cart-heading text-black"
						onClick={() => setShowCart(false)}
					>
						<AiOutlineLeft />
						<span className="heading">Your Cart</span>
						<span className="cart-num-items">({totalQuantities} items)</span>
					</button>
					<ConfirmDialog />
				</div>

				{cartItems.length < 1 && (
					<div className="empty-cart">
						<AiOutlineShopping size={150} />
						<h3>Your shopping bag is empty</h3>

						<button
							type="button"
							onClick={() => setShowCart(false)}
							className="btn"
						>
							Continue Shopping
						</button>
					</div>
				)}

				<div className="product-container">
					{cartItems.length >= 1 &&
						cartItems.map((item: Product) => (
							<div className="product" key={`${item._id}-${item.size}`}>
								<Image
									width={150}
									height={150}
									src={item.image[0].url}
									alt={item.image[0].alt}
									className="cart-product-image"
								/>
								<div className="item-desc">
									<div className="flex top">
										<h5>{item.name}</h5>
										<h4>
											{item.is_discounted
												? getFormattedPrice(
														(item.discounted_price as number) || item.price
												  )
												: getFormattedPrice(item.price)}
										</h4>
									</div>
									<h4 className="uppercase text-xl">Size : {item.size}</h4>
									<div className="flex bottom">
										<div>
											<p className="quantity-desc">
												<span
													className="minus"
													onClick={() =>
														toggleCartItemQuantity(item._id, "dec", item.size)
													}
												>
													<AiOutlineMinus />
												</span>
												<span className="num">{item.quantity}</span>
												<span
													className="plus"
													onClick={() =>
														toggleCartItemQuantity(item._id, "inc", item.size)
													}
												>
													<AiOutlinePlus />
												</span>
											</p>
										</div>
										<button
											type="button"
											className="remove-item"
											onClick={() => onRemove(item)}
										>
											<TiDeleteOutline />
										</button>
									</div>
								</div>
							</div>
						))}
				</div>
				{cartItems.length >= 1 && (
					<div className="cart-bottom">
						<div className="total">
							<h3>Subtotal:</h3>
							<h3 className="text-black">{totalPrice}€</h3>
						</div>
						<div className="btn-container">
							<button type="button" className="btn" onClick={handleCheckout}>
								Payer avec Stripe
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Cart
