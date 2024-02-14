import SingleFeaturedPost from "./SingleFeaturedPost"

import { getPosts } from "@/sanity/sanity-utils"

const FeaturedPosts = async () => {
	const posts = await getPosts()

	return (
		<div className="grid p-4 gap-y-4 md:grid-cols-2 md:gap-x-4 md:gap-y-12 lg:grid-cols-3  lg:p-0 lg:py-12 lg:px-16">
			{posts.map((post) => {
				return <SingleFeaturedPost key={post._id} display="icon" post={post} />
			})}
			{posts.map((post) => {
				return <SingleFeaturedPost key={post._id} display="icon" post={post} />
			})}
			{posts.map((post) => {
				return <SingleFeaturedPost key={post._id} display="icon" post={post} />
			})}
		</div>
	)
}
export default FeaturedPosts
