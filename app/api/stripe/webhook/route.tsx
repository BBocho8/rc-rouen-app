import Stripe from "stripe"
import { NextResponse } from "next/server"

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

	console.log("✅ Success:", event.id)

	if (event.type === "checkout.session.completed") {
		console.log(`💰  Payment received!`)
		console.log("SESSION -----", session)
		const lineItems = await stripe.checkout.sessions.listLineItems(session.id)
		console.log("LIST OF ITEMS -----", lineItems)
	} else {
		console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`)
	}

	return NextResponse.json({ received: true }, { status: 200 })
}
