import { createClient, groq } from "next-sanity"
import clientConfig from "@/sanity/config/client-config"
import { ClientAddress, Order, OrdersApiResponse } from "@/sanity/types/Order"

export async function getOrders(): Promise<OrdersApiResponse> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "orders"] {
      _id,
      date,
      client_name,
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

	date?: number
	client_name?: string
	client_address?: ClientAddress

	order_subtotal_amount?: number
	shipping_rate?: number
	order_total_amount?: number
	status?: string
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
								date: 1706993437,
								client_name: "Brice Ocho",
								// date: orderDetails.date,
								// client_name: orderDetails.client_name,
								// client_address: orderDetails.client_address,
								// order_subtotal_amount: orderDetails.order_subtotal_amount,
								// shipping_rate: orderDetails.shipping_rate,
								// order_total_amount: orderDetails.order_total_amount,
								// status: "pending",

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
