import { getPosts } from "@/sanity/sanity-utils"

import HeroHeader from "../components/landingPage/HeroHeader"
import FeaturedPosts from "../components/blog/FeaturedPosts"

import { getGames } from "../utils/getPrevNextGames"
import PrevGame from "../components/games/PrevGame"
import NextGame from "../components/games/NextGame"

import Contact from "../components/landingPage/contact/Contact"
import FeaturedArticles from "../components/landingPage/FeaturedArticles"

export default async function Home() {
	const games = await getGames()
	const posts = await getPosts()

	return (
		<>
			<HeroHeader games={games} />
			<FeaturedArticles posts={posts} />
			{/* <div className="py-16">
				<FeaturedPosts />
			</div> */}
			<div className="grid px-4 gap-y-4 md:gap-y-0 md:grid-cols-2 md:gap-x-4 mx-auto md:px-4">
				<PrevGame games={games} />

				<NextGame games={games} />
			</div>
			<br />

			<Contact />
		</>
	)
}
