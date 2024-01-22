import {
	Product,
	FooterBanner,
	HeroBanner,
	Footer,
} from "@/app/components/shop"
import HeroHeader from "@/app/components/shop/HeroHeader"
import { getBanner, getProducts } from "@/sanity/sanity-utils"

const ShopHome = async () => {
	const banner = await getBanner()
	const products = await getProducts()
	return (
		<div>
			<HeroHeader />
			{/* {banner.length && <HeroBanner heroBanner={banner[0]} />}
			<div className="products-heading">
				<h2>Best Selling Products</h2>
				<p>Speakers of many variations</p>
			</div> */}
			<div className="products-container">
				{products.map((product) => (
					<Product key={product._id} product={product} />
				))}
			</div>
			{banner.length && <FooterBanner footerBanner={banner[0]} />}
		</div>
	)
}
export default ShopHome
