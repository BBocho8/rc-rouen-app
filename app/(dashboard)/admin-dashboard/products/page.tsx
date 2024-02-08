import ProductLandingPage from "@/app/components/admin-dashboard/ProductLandingPage"
import { Product } from "@/app/types/admin-dashboard/product"
import { createProductSanity, getProducts } from "@/sanity/sanity-utils"
import { create } from "domain"

const ProductsPage = async () => {
	const products = await getProducts()

	return (
		<div>
			<h1 className="my-4 text-center text-3xl font-medium">PRODUCTS</h1>

			<p className="text-center my-4 font-medium text-xl">
				Products in store : {products.length}
			</p>

			<ProductLandingPage products={products} />
		</div>
	)
}
export default ProductsPage

export const dynamic = "force-dynamic"
