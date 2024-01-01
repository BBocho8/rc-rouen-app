import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image"
import Link from "next/link"
import testHero2 from "@/public/testHero2.jpg"
import { HiArrowLongRight } from "react-icons/hi2"

export default async function Home() {
	const projects = await getProjects()

	return (
		<>
			<div className="grid grid-rows-2 md:grid-rows-2 lg:grid-cols-5 lg:grid-rows-1  h-screen-sm-nav2   md:min-h-screen-lg-nav md:h-auto lg:h-screen-lg-nav2">
				<div className="row-span-1 lg:row-span-1 h-full lg:h-screen-lg-nav2 lg:col-span-3 bg-emerald-200 w-full   md:h-screen-lg-nav2 md:row-span-1 ">
					<Image
						src={testHero2}
						alt="hero"
						width={0}
						height={0}
						// style={{ width: "100%", height: "auto" }}
						className="w-full h-full object-cover"
					/>
				</div>
				<div className=" row-span-1  h-56 sm:h-48 md:h-60 lg:row-span-1  lg:h-screen-lg-nav2 lg:col-span-2 hero w-full  md:row-span-1 flex flex-col gap-y-2  lg:gap-y-4 lg:justify-center lg:items-start lg:px-8 justify-center items-start px-4 ">
					<span className="uppercase text-secondary font-bold text-[14px]">
						équipe première
					</span>
					<span className="text-complementary text-xl sm:text-2xl md:text-4xl lg:text-2xl font-semibold">
						Une offre de transfert a été acceptée pour le transfert de notre
						joueur Josué Lagui vers l&apos;US Palmese 1912.
					</span>
					<span>
						<HiArrowLongRight className="text-secondary text-[2rem] lg:text-[3rem]" />
					</span>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<div className="bg-red-400">
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
			</div>
		</>
	)
}
