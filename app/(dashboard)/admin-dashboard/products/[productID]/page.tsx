import { getProduct, getProducts } from "@/sanity/sanity-utils"

export async function generateStaticParams() {
	const products = await getProducts()

	return products.map((product) => ({
		productID: product._id,
	}))
}

const OrderPage = async ({ params }: { params: { productID: string } }) => {
	const product = await getProduct(params.productID)

	if (!product) {
		return <div>Order not found</div>
	}

	return (
		<div className="my-8 mx-auto flex justify-center items-center">
			<p>{product.name}</p>
			HELLOOOO
		</div>
	)
}
export default OrderPage
