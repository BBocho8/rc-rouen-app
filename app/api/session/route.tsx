import Stripe from "stripe"
import { NextResponse } from "next/server"

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string)

export async function POST(req: Request) {
	const { id } = await req.json()

	try {
		const session = await stripe.checkout.sessions.retrieve(id)

		const lineItems = await stripe.checkout.sessions.listLineItems(id)

		return NextResponse.json({ session, lineItems }, { status: 200 })
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 400 })
	}
}
