import { getFullFormattedDate } from "@/app/utils/getFormattedDate"
import { Post } from "@/sanity/types/Post"
import Image from "next/image"

type SingleFeaturedPostProps = {
	display: "icon" | "list" | "listIcon"
	image?: any
	post: Post
}

const SingleFeaturedPost = ({
	display,
	image,
	post,
}: SingleFeaturedPostProps) => {
	const createdAt = getFullFormattedDate(post.publishedAt)
	return (
		<>
			{display === "icon" && (
				<div className="flex flex-col gap-y-2">
					<Image
						src={post.image_url}
						width={600}
						height={400}
						alt={post.image_alt}
						className="aspect-3/2 object-cover w-full"
					/>
					<div className="flex justify-start items-center gap-x-2">
						<span className="text-primary uppercase text-xs font-semibold">
							{post.categories[0]}
						</span>
						<div className="border-l border-l-gray-300 h-4 md:h-6 "></div>
						<span className="text-body text-xs font-light">{createdAt}</span>
					</div>
					<p className="font-bold text-lg text-body">{post.title}</p>
				</div>
			)}

			{display === "list" && (
				<div className="border-l-4 border-l-gray-300 pl-4 flex flex-col gap-y-2 py-2 max-h-20">
					<p className="font-bold  text-body">{post.title}</p>
					<div className="flex justify-start items-center gap-x-2">
						<span className="text-primary uppercase text-xs font-semibold">
							{post.categories[0]}
						</span>
						<div className="border-l border-l-gray-300 h-4 md:h-6 "></div>
						<span className="text-body text-xs font-light">{createdAt}</span>
					</div>
				</div>
			)}

			{display === "listIcon" && (
				<div className="flex justify-start items-center gap-x-2 ">
					<Image
						src={post.image_url}
						width={100}
						height={100}
						alt={post.image_alt}
						className="aspect-square "
					/>

					<div className="  flex flex-col gap-y-2 py-2">
						<div className="flex justify-start items-center gap-x-2">
							<span className="text-primary uppercase text-xs font-semibold">
								{post.categories[0]}
							</span>
							<div className="border-l border-l-gray-300 h-4 md:h-6 "></div>
							<span className="text-body text-xs font-light">{createdAt}</span>
						</div>
						<p className="font-bold  text-body">{post.title}</p>
					</div>
				</div>
			)}
		</>
	)
}
export default SingleFeaturedPost
