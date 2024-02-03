import { NextResponse } from "next/server"

import Stripe from "stripe"
import { Product } from "@/sanity/types/Product"
import { allowedCountries } from "../../utils/shop/allowedCountries"

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string)

export async function POST(req: Request) {
	const body = await req.json()

	try {
		const session = await stripe.checkout.sessions.create({
			submit_type: "pay",
			mode: "payment",
			payment_method_types: ["card"],
			billing_address_collection: "auto",
			metadata: { name: "Brice Ocho", Age: "14 Years Old" },
			shipping_options: [
				{ shipping_rate: "shr_1OZdyNLKK6Ppv4DFSkdo2MV6" },
				{ shipping_rate: "shr_1OZdzOLKK6Ppv4DFlnr4Ozwg" },
			],
			line_items: body.map((item: Product) => {
				const img = item.image[0].url

				return {
					price_data: {
						currency: "eur",
						product_data: {
							name: item.name,
							images: [img],
							metadata: { size: item.size || "none", id: item._id },
						},

						// unit_amount: item.price * 100,
						unit_amount: item.is_discounted
							? ((item.discounted_price as number) || item.price) * 100
							: item.price * 100,
					},
					adjustable_quantity: {
						enabled: true,
						minimum: 1,
					},
					quantity: item.quantity,
				}
			}),
			shipping_address_collection: {
				allowed_countries: allowedCountries as any,
			},

			success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop/success`,
			cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop`,
		})

		return NextResponse.json({ session }, { status: 200 })
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 })
	}
}
