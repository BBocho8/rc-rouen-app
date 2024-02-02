import { getShopRubriques } from "@/sanity/utils/shop/getShopRubriques"

export async function generateStaticParams() {
	const rubriques = await getShopRubriques()

	return rubriques.map((rubrique) => ({
		categoryName: rubrique.slug,
	}))
}

const CategoryPage = () => {
	return <div>CategoryPage</div>
}
export default CategoryPage
