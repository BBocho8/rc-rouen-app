import { getProjects } from "@/sanity/sanity-utils"

import HeroHeader from "../components/landingPage/HeroHeader"
import FeaturedPosts from "../components/landingPage/FeaturedPosts"

import { getGames } from "../utils/getPrevNextGames"
import PrevGame from "../components/landingPage/PrevGame"
import NextGame from "../components/landingPage/NextGame"

export default async function Home() {
	const projects = await getProjects()
	const games = await getGames()

	return (
		<>
			<HeroHeader />

			<FeaturedPosts />

			<PrevGame games={games} />
			<br />
			<NextGame games={games} />

			{/* <div className="bg-red-400">
				<div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
					{projects.map((project) => (
						<Link
							href={`/projects/${project.slug}`}
							key={project._id}
							className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
						>
							{project.image && (
								<Image
									src={project.image}
									alt={project.name}
									width={750}
									height={300}
									className="object-cover rounded-lg border border-gray-500"
								/>
							)}
							<div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
								{project.name}
							</div>
						</Link>
					))}
				</div>
			</div> */}
		</>
	)
}
