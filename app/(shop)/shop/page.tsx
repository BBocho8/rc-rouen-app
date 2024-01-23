import {
	Product,
	FooterBanner,
	HeroBanner,
	Footer,
} from "@/app/components/shop"
import HeroHeader from "@/app/components/shop/HeroHeader"
import HomeCollection from "@/app/components/shop/HomeCollection"
import { getBanner, getProducts } from "@/sanity/sanity-utils"
import img from "@/public/HeroCollectionTest.jpg"
import img2 from "@/public/HeroCollectionTest1.jpg"

const ShopHome = async () => {
	const banner = await getBanner()
	const products = await getProducts()
	return (
		<div className="flex flex-col gap-y-10 ">
			<HeroHeader />
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
						image={img}
						title="Nouveautés Mode"
						buttonText="Acheter Ici"
					/>
				</div>
				<div className="flex justify-center items-start">
					<HomeCollection
						image={img2}
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
