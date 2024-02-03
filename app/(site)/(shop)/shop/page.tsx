import { Product } from "@/app/components/shop"
import HeroHeader from "@/app/components/shop/HeroHeader"
import HomeCollection from "@/app/components/shop/HomeCollection"
import { getBanner, getProducts } from "@/sanity/sanity-utils"

import { getGlobalConfigImages } from "@/sanity/utils/blog/getConfig"

const ShopHome = async () => {
	const banner = await getBanner()
	const products = await getProducts()
	const globalConfigImages = await getGlobalConfigImages()

	const heroImage = globalConfigImages.filter(
		(image) => image.slug === "shop-hero-header"
	)

	const collectionImages = globalConfigImages.filter(
		(image) =>
			image.slug === "promo-collection-1-shop" ||
			image.slug === "promo-collection-2-shop"
	)

	// const handleTest = async () => {
	// 	const response = await fetch(
	// 		`${process.env.NEXT_PUBLIC_BASE_URL}/api/session`,
	// 		{
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify({
	// 				id: "cs_test_b149We8ylHFlNeUmvJzh44SKUphJqLSsFxsayo1IjNPOswnPjuG9QHNL1h",
	// 			}),
	// 		}
	// 	)
	// 	if (response.status === 500) return

	// 	const data = await response.json()
	// 	return data
	// }

	// const data = await handleTest()
	// console.log(data)

	return (
		<div className="flex flex-col gap-y-10 ">
			<HeroHeader image={heroImage} />

			<div className="text-center">
				<h2 className="text-[2.5rem] font-extrabold text-primary-dark ">
					Best Selling Products
				</h2>
				<p className="font-extralight text-base tracking-wide text-primary-dark">
					Shirts of many variations
				</p>
			</div>
			<div className="grid px-2 sm:px-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-1 sm:gap-x-2 mx-auto">
				{products.map((product) => (
					<div key={product._id} className="flex justify-center items-start">
						<Product product={product} />
					</div>
				))}
			</div>
			<div className="grid grid-cols-2 mx-auto px-2 gap-x-2 sm:gap-x-8">
				<div className="flex justify-center items-start">
					<HomeCollection
						image={collectionImages[0]}
						title="Nouveautés Mode"
						buttonText="Acheter Ici"
					/>
				</div>
				<div className="flex justify-center items-start">
					<HomeCollection
						image={collectionImages[1]}
						title="Nouveautés Chaussures"
						buttonText="Acheter Ici"
					/>
				</div>
			</div>
			{/* {banner.length && <FooterBanner footerBanner={banner[0]} />} */}
		</div>
	)
}
export default ShopHome
