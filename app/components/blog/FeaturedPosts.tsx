import SingleFeaturedPost from "./SingleFeaturedPost"

import { getPosts } from "@/sanity/sanity-utils"
const FeaturedPosts = async () => {
	const posts = await getPosts()
	return (
		<div className="grid p-4 gap-y-4 md:grid-cols-2 md:gap-x-4 md:gap-y-12 lg:grid-cols-3  lg:p-0 lg:py-12 lg:px-16">
			<SingleFeaturedPost display="icon" post={posts[0]} />
			<SingleFeaturedPost display="icon" post={posts[0]} />
			<div className="flex flex-col gap-y-4 justify-center">
				<SingleFeaturedPost display="list" post={posts[0]} />
				<SingleFeaturedPost display="list" post={posts[0]} />
				<SingleFeaturedPost display="list" post={posts[0]} />
				<SingleFeaturedPost display="list" post={posts[0]} />
			</div>
			<div className="flex flex-col gap-y-4 justify-start">
				{posts.map((post) => {
					return (
						<SingleFeaturedPost key={post._id} display="listIcon" post={post} />
					)
				})}
				{/* <SingleFeaturedPost display="listIcon" post={posts[0]} />
				<SingleFeaturedPost display="listIcon" post={posts[0]} />
				<SingleFeaturedPost display="listIcon" post={posts[0]} /> */}
			</div>
			<SingleFeaturedPost display="icon" post={posts[0]} />
			<div className="flex flex-col gap-y-4 justify-center">
				<SingleFeaturedPost display="list" post={posts[0]} />
				<SingleFeaturedPost display="list" post={posts[0]} />
				<SingleFeaturedPost display="list" post={posts[0]} />
				<SingleFeaturedPost display="list" post={posts[0]} />
			</div>
			<div className="flex flex-col gap-y-4 justify-start">
				<SingleFeaturedPost display="listIcon" post={posts[0]} />
				<SingleFeaturedPost display="list" post={posts[0]} />
				<SingleFeaturedPost display="listIcon" post={posts[0]} />
			</div>
			<SingleFeaturedPost display="icon" post={posts[0]} />

			<SingleFeaturedPost display="icon" post={posts[0]} />
		</div>
	)
}
export default FeaturedPosts
