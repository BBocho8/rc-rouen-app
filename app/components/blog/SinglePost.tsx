import { Post } from "@/sanity/types/Post"
import ProseableText from "./ProseableText"
import Image from "next/image"
import { Paper } from "@mui/material"
import { getFullFormattedDate } from "@/app/utils/getFormattedDate"
import { CiShare1 } from "react-icons/ci"
import Link from "next/link"
import SingleFeaturedPost from "./SingleFeaturedPost"

type SinglePostProps = {
	post: Post
}

const tags = ["equipe premiere", "reactions", "coach", "resultat"]

const SinglePost = ({ post }: SinglePostProps) => {
	const createdAt = getFullFormattedDate(post.publishedAt)
	const category = post.categories[0].replace("-", " ")

	return (
		<section>
			<div className="w-full max-h-[32rem] overflow-hidden relative ">
				<Image
					src={post.image_url}
					alt={post.image_url}
					width={1980}
					height={1080}
					className="object-cover aspect-video  "
				/>
			</div>
			<div className=" xl:grid xl:grid-cols-4 xl:mx-auto">
				<Paper
					elevation={15}
					square
					className="xl:col-span-3 p-4 sm:p-12 bg-white translate-y-[-6rem] mx-auto max-w-2xl lg:max-w-[56rem]"
				>
					<h1 className="text-center">{post.title}</h1>
					<div className="flex justify-center sm:justify-between  items-center my-2 text-center ">
						<div className="flex justify-start items-center gap-x-2">
							<span className="text-primary uppercase text-xs font-semibold">
								{category}
							</span>
							<div className="border-l border-l-gray-300 h-4 md:h-4 "></div>
							<span className="text-body text-xs font-light">{createdAt}</span>
						</div>

						<div className="flex justify-end items-center   ">
							<div className="hidden sm:flex  gap-x-1">
								<span className="text-body transition-all text-xs font-light uppercase cursor-pointer  hover:font-bold  ">
									Partager
								</span>
								<CiShare1 className="text-body cursor-pointer   transition-all  " />
							</div>
						</div>
					</div>
					<div className="flex justify-center items-center sm:hidden mt-3  ">
						<div className="flex  gap-x-1">
							<span className="text-body transition-all text-xs font-light uppercase cursor-pointer  hover:font-bold  ">
								Partager
							</span>
							<CiShare1 className="text-body cursor-pointer   transition-all  " />
						</div>
					</div>
					<div className="border-b border-b-gray-100 my-5 sm:my-8  "></div>
					<ProseableText post={post.body} />
					<div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2 my-8 ">
						{tags.map((tag) => {
							return (
								<Link className="" key={tag} href="#">
									<button
										type="button"
										className=" overflow-hidden whitespace-nowrap py-2 px-4 bg-gray-300 text-black text-sm font-medium uppercase rounded-full hover:bg-gray-400 transition-all"
									>
										{tag}
									</button>
								</Link>
							)
						})}
					</div>
					<div className="border-b border-b-gray-100 my-6  "></div>

					<div className="flex justify-end items-center   ">
						<div className="flex  gap-x-1">
							<span className=" text-body transition-all text-xs font-light uppercase cursor-pointer  hover:font-bold  ">
								Partager
							</span>
							<CiShare1 className="text-body cursor-pointer   transition-all  " />
						</div>
					</div>
				</Paper>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 px-6 xl:gap-x-0 xl:flex xl:flex-col xl:py-12 xl:px-8 xl:items-center xl:justify-start xl:col-span-1 xl:mx-auto xl:gap-y-4">
					<div>
						<div className=" sm:hidden">
							<SingleFeaturedPost display="list" post={post} />
						</div>
						<div className=" hidden sm:block lg:hidden">
							<SingleFeaturedPost display="listIcon" post={post} />
						</div>
						<div className="hidden lg:block">
							<SingleFeaturedPost display="icon" post={post} />
						</div>
					</div>

					<div className="hidden xl:border-b xl:border-b-gray-100  xl:w-full  "></div>
					<div>
						<div className=" sm:hidden">
							<SingleFeaturedPost display="list" post={post} />
						</div>
						<div className="hidden sm:block lg:hidden">
							<SingleFeaturedPost display="listIcon" post={post} />
						</div>
						<div className="hidden lg:block">
							<SingleFeaturedPost display="icon" post={post} />
						</div>
					</div>
					<div className="hidden xl:border-b xl:border-b-gray-100  xl:w-full  "></div>
					<div>
						<div className=" sm:hidden">
							<SingleFeaturedPost display="list" post={post} />
						</div>
						<div className=" hidden sm:block lg:hidden">
							<SingleFeaturedPost display="listIcon" post={post} />
						</div>
						<div className="hidden lg:block">
							<SingleFeaturedPost display="icon" post={post} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default SinglePost
