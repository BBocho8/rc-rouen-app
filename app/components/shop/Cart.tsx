"use client"
import React, { useRef } from "react"
import {
	AiOutlineMinus,
	AiOutlinePlus,
	AiOutlineLeft,
	AiOutlineShopping,
} from "react-icons/ai"
import { TiDeleteOutline } from "react-icons/ti"

import { toast } from "react-toastify"

import { useStateContext } from "@/app/context/StateContext"
import { Product } from "@/sanity/types/Product"
import Image from "next/image"
import getStripe from "@/app/utils/getStripe"

const Cart = () => {
	const cartRef = useRef(null)
	const {
		totalPrice,
		totalQuantities,
		cartItems,
		setShowCart,
		onRemove,
		toggleCartItemQuantity,
	} = useStateContext()

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
				<button
					type="button"
					className="cart-heading"
					onClick={() => setShowCart(false)}
				>
					<AiOutlineLeft />
					<span className="heading">Your Cart</span>
					<span className="cart-num-items">({totalQuantities} items)</span>
				</button>

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
							<div className="product" key={item._id}>
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
										<h4>${item.price}</h4>
									</div>
									<div className="flex bottom">
										<div>
											<p className="quantity-desc">
												<span
													className="minus"
													onClick={() =>
														toggleCartItemQuantity(item._id, "dec")
													}
												>
													<AiOutlineMinus />
												</span>
												<span className="num">{item.quantity}</span>
												<span
													className="plus"
													onClick={() =>
														toggleCartItemQuantity(item._id, "inc")
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
							<h3>${totalPrice}</h3>
						</div>
						<div className="btn-container">
							<button type="button" className="btn" onClick={handleCheckout}>
								Pay with Stripe
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Cart