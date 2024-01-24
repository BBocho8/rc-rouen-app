import Stripe from "stripe"
import { buffer } from "micro"
import { NextResponse } from "next/server"

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string)

export async function POST(req: any, res: any) {
	const body = await req.json()
	let event

	try {
		// 1. Retrieve the event by verifying the signature using the raw body and secret
		const rawBody = await req.text()
		const signature = body.headers["stripe-signature"]

		event = stripe.webhooks.constructEvent(
			rawBody.toString(),
			signature,
			process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET as string
		)
	} catch (err: any) {
		console.log(`❌ Error message: ${err.message}`)
		res.status(400).send(`Webhook Error: ${err.message}`)
		return
	}

	// Successfully constructed event
	console.log("✅ Success:", event.id)

	// 2. Handle event type (add business logic here)
	if (event.type === "checkout.session.completed") {
		console.log(`💰  Payment received!`)
	} else {
		console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`)
	}

	// 3. Return a response to acknowledge receipt of the event.
	return NextResponse.json({ received: true })
}
