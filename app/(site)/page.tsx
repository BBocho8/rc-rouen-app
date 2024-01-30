import { getPosts } from "@/sanity/sanity-utils"

import HeroHeader from "../components/landingPage/HeroHeader"
import homeCollection from "@/public/homeCollection.jpg"
import { getGames } from "../utils/getPrevNextGames"
import PrevGame from "../components/games/PrevGame"
import NextGame from "../components/games/NextGame"

import Contact from "../components/landingPage/contact/Contact"
import FeaturedArticles from "../components/landingPage/FeaturedArticles"
import ShopPromotion from "../components/landingPage/ShopPromotion"
import Newsletter from "../components/landingPage/Newsletter"

export default async function Home() {
	const games = await getGames()
	const posts = await getPosts()

	return (
		<div className="pt-14 md:pt-24">
			<HeroHeader games={games} />
			<FeaturedArticles posts={posts} />
			{/* <div className="py-16">
				<FeaturedPosts />
			</div> */}
			<div className="grid px-4 py-10 mx-auto gap-y-4 md:gap-y-0 md:grid-cols-2 md:gap-x-4 md:px-4 bg-gray-50">
				<PrevGame games={games} />

				<NextGame games={games} />
			</div>

			<ShopPromotion
				buttonText="acheter ici"
				image={homeCollection}
				title="New Fourth Kit 23-24"
			/>
			<div className="bg-gray-50">
				<Contact />
			</div>
			<div className="py-16 ">
				<Newsletter />
			</div>
		</div>
	)
}
