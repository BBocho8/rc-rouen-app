import { Post } from "@/sanity/types/Post"
import ProseableText from "./ProseableText"
import Image from "next/image"
import { Paper } from "@mui/material"
import { getFullFormattedDate } from "@/app/utils/getFormattedDate"
import { CiShare1 } from "react-icons/ci"
import Link from "next/link"

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
			<Paper
				elevation={15}
				square
				className="p-16 bg-white translate-y-[-6rem] mx-auto max-w-4xl"
			>
				<h1>{post.title}</h1>
				<div className="flex justify-between items-center my-2">
					<div className="flex justify-start items-center gap-x-2">
						<span className="text-primary uppercase text-xs font-semibold">
							{category}
						</span>
						<div className="border-l border-l-gray-300 h-4 md:h-4 "></div>
						<span className="text-body text-xs font-light">{createdAt}</span>
					</div>

					<div className="flex justify-end items-center   ">
						<div className="flex  gap-x-1">
							<span className="text-body transition-all text-xs font-light uppercase cursor-pointer  hover:font-bold  ">
								Partager
							</span>
							<CiShare1 className="text-body cursor-pointer   transition-all  " />
						</div>
					</div>
				</div>
				<div className="border-b border-b-gray-100 my-8  "></div>
				<ProseableText post={post.body} />
				<div className="flex justify-center items-center gap-x-2">
					{tags.map((tag) => {
						return (
							<Link className="my-8" key={tag} href="#">
								<button
									type="button"
									className=" py-2 px-4 bg-gray-300 text-black text-sm font-medium uppercase rounded-full hover:bg-gray-400 transition-all"
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
						<span className="text-body transition-all text-xs font-light uppercase cursor-pointer  hover:font-bold  ">
							Partager
						</span>
						<CiShare1 className="text-body cursor-pointer   transition-all  " />
					</div>
				</div>
			</Paper>
		</section>
	)
}
export default SinglePost
