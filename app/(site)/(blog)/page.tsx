import { getPosts } from "@/sanity/sanity-utils"

import HeroHeader from "../../components/landingPage/HeroHeader"
import { getGames } from "../../utils/getPrevNextGames"
import PrevGame from "../../components/games/PrevGame"
import NextGame from "../../components/games/NextGame"

import Contact from "../../components/landingPage/contact/Contact"
import FeaturedArticles from "../../components/landingPage/FeaturedArticles"
import ShopPromotion from "../../components/landingPage/ShopPromotion"
import Newsletter from "../../components/landingPage/Newsletter"

import { getGlobalConfigImages } from "@/sanity/utils/blog/getConfig"

export default async function Home() {
	const teamID = process.env.NEXT_PUBLIC_SCORENCO_FIRST_TEAM_ID as string

	const games = await getGames(teamID)
	const posts = await getPosts()

	const globalConfigImages = await getGlobalConfigImages()

	const logoClub = globalConfigImages.filter(
		(image) => image.slug === "logo-club"
	)
	const homeCollection = globalConfigImages.filter(
		(image) => image.slug === "shop-promotion-image"
	)

	return (
		<div className=" ">
			<HeroHeader games={games} image={globalConfigImages} />
			<FeaturedArticles posts={posts} />

			<div className="grid px-4 py-4 mx-auto gap-y-4 md:gap-y-0 md:grid-cols-2 md:gap-x-4 md:px-4 bg-gray-50">
				<PrevGame games={games} image={logoClub} />

				<NextGame games={games} image={logoClub} />
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
