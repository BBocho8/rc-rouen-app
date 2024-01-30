import ProductDetails from "@/app/components/shop/ProductDetails"
import { getProduct, getProducts } from "@/sanity/sanity-utils"
import NotFound from "./not-found"

export async function generateStaticParams() {
	const products = await getProducts()

	return products.map((product) => ({
		productSlug: product.slug,
	}))
}

const ProductDetailsPage = async ({
	params,
}: {
	params: { productSlug: string }
}) => {
	const product = await getProduct(params.productSlug)
	const products = await getProducts()

	if (product === null) {
		return <NotFound />
	}

	return <ProductDetails products={products} product={product} />
}
export default ProductDetailsPage
