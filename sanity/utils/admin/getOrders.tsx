import { createClient, groq } from "next-sanity"
import clientConfig from "@/sanity/config/client-config"
import { ClientAddress, Order, OrdersApiResponse } from "@/sanity/types/Order"
import Stripe from "stripe"

export async function getOrders(): Promise<OrdersApiResponse> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "orders"] {
      _id,
      date,
      client_name,
      client_mail,
      client_address,
      order_subtotal_amount,
      shipping_rate,
      order_total_amount,
   
      order_items,
      status,
    }`
	)
}

export async function getOrder(stripe_id: string): Promise<Order> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "orders"] {
      _id,
      date,
      client_name,
      client_mail,
      client_address,
      order_subtotal_amount,
      shipping_rate,
      order_total_amount,
   
      order_items,
      status,
    }`,
		{ stripe_id }
	)
}

type OrderDetails = {
	_id: string
	created: number
	amount_subtotal: number | null
	amount_total: number | null
	shipping: Stripe.Checkout.Session.ShippingCost | null
	address: Stripe.Address | undefined
	client: string | null | undefined
	email: string | null | undefined
}

export const createOrderSanity = async (orderDetails: OrderDetails) => {
	try {
		const response = await fetch(
			`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/mutate/production`,
			{
				method: "POST",
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${
						process.env.NEXT_PUBLIC_SANITY_API_TOKEN as string
					}`,
				},
				body: JSON.stringify({
					mutations: [
						{
							create: {
								_id: orderDetails._id,
								date: orderDetails.created,
								client_name: orderDetails.client,
								client_mail: orderDetails.email,
								client_address: [orderDetails.address],
								order_subtotal_amount: orderDetails.amount_subtotal,
								shipping_rate: orderDetails.shipping?.amount_total,
								order_total_amount: orderDetails.amount_total,
								status: "pending",

								_type: "orders",
							},
						},
					],
				}),
			}
		)

		if (!response.ok) {
			throw new Error("Failed to update document in Sanity")
		}

		const data = await response.json()

		console.log("Order successfully added to Sanity", data)
	} catch (error) {
		console.error("Error during the creation of the document:", error)
	}
}
