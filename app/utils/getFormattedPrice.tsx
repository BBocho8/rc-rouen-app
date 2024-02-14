export default function getFormattedPrice(price: number) {
	return new Intl.NumberFormat("fr-FR", {
		style: "currency",
		currency: "EUR",
	}).format(price)
}

export function getFormattedStripePrice(price: number) {
	return new Intl.NumberFormat("fr-FR", {
		style: "currency",
		currency: "EUR",
	}).format(price / 100)
}
