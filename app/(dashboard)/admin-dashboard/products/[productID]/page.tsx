import SingleProduct from "@/app/components/admin-dashboard/SingleProduct"
import { getProduct, getProducts } from "@/sanity/sanity-utils"
import { redirect } from "next/navigation"

export async function generateStaticParams() {
	const products = await getProducts()

	return products.map((product) => ({
		productID: product._id,
	}))
}

const OrderPage = async ({ params }: { params: { productID: string } }) => {
	const product = await getProduct(params.productID)

	if (!product) {
		redirect("/admin-dashboard/products")
	}

	return (
		<div className="my-8 mx-auto flex justify-center items-center">
			<SingleProduct product={product} />
		</div>
	)
}
export default OrderPage

export const dynamic = "force-dynamic"
