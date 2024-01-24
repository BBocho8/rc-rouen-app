import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string)

export async function POST(req: Request, res: Response) {
	console.log(req)

	// try {
	//   if(!id.startsWith("cs_")) {
	//     throw Error("Incorrect CheckoutSession ID.")
	//   }
	//   const checkout_session: Stripe.Checkout.Session = await stripe.checkout.sessions.retrieve(id)
	//   return NextResponse.json({ checkout_session }, { status: 200 })
	// } catch (error: any) {

	//   return NextResponse.json({ error: error.message }, { status: 500 })
	// }
}
