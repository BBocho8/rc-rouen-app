import Stripe from "stripe"
import { NextResponse } from "next/server"
import { createOrderSanity } from "@/sanity/utils/admin/getOrders"

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string)

export async function POST(req: Request) {
	let event: Stripe.Event

	const body = await req.text()
	const signature = req.headers.get("stripe-signature") as string

	try {
		event = stripe.webhooks.constructEvent(
			body,
			signature,
			process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET as string
		)
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 400 })
	}

	const session = event.data.object as Stripe.Checkout.Session

	const sessionID = session.id
	const created = session.created
	const amount_subtotal = session.amount_subtotal
	const amount_total = session.amount_total
	const shipping = session.shipping_cost
	const address = session.shipping_details?.address
	const client = session.shipping_details?.name

	const orderDetails = {
		_id: sessionID,
		created,
		amount_subtotal,
		amount_total,
		shipping,
		address,
		client,
	}

	if (event.type === "checkout.session.completed") {
		try {
			await createOrderSanity(orderDetails)
		} catch (error) {
			console.log("CREATE ORDER SANITY PB", error)
		}
		// console.log(`💰  Payment received!`)
		// console.log("SESSION -----", session)
		// const lineItems = await stripe.checkout.sessions.listLineItems(session.id)
		// console.log("LIST OF ITEMS -----", lineItems)
		// console.log("LIST OF ITEMS PRICE OBJECT -----", lineItems.data[0].price)
	} else {
		console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`)
	}

	return NextResponse.json({ received: true }, { status: 200 })
}
