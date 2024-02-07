import Stripe from "stripe"
import { NextResponse } from "next/server"
import { createOrderSanity } from "@/sanity/utils/admin/getOrders"
import { nanoid } from "nanoid"
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
	const address: (Stripe.Address & { _key: string }) | undefined = session
		.shipping_details?.address
		? { ...session.shipping_details.address, _key: nanoid() }
		: undefined
	const client = session.customer_details?.name
	const email = session.customer_details?.email

	const orderDetails = {
		_id: sessionID,
		created,
		amount_subtotal,
		amount_total,
		shipping,
		address,
		client,
		email,
	}

	if (event.type === "checkout.session.completed") {
		try {
			await createOrderSanity(orderDetails)
		} catch (error) {
			console.log("CREATE ORDER SANITY PB", error)
		}
	} else {
		console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`)
	}

	return NextResponse.json({ received: true }, { status: 200 })
}
