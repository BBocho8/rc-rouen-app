import Stripe from "stripe"
import { NextResponse } from "next/server"

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string)

export async function POST(req: Request) {
	const { id } = await req.json()

	try {
		const session = await stripe.checkout.sessions.retrieve(id)

		console.log(session)

		const lineItems = await stripe.checkout.sessions.listLineItems(id, {
			expand: ["data.price.product"],
		})

		const products = lineItems.data.map((item) => {
			return {
				amount_subtotal: item.amount_subtotal,
				amount_total: item.amount_total,
				productID: item.price?.product,
				quantity: item.quantity,
			}
		})

		return NextResponse.json(
			{
				session: {
					sessionID: session.id,

					amount_subtotal: session.amount_subtotal,
					amount_total: session.amount_total,
					payment_intent: session.payment_intent,
					shipping: session.shipping_cost,
					address: session.shipping_details?.address,
					client: session.shipping_details?.name,
				},
				products,
			},
			{ status: 200 }
		)
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 400 })
	}
}
