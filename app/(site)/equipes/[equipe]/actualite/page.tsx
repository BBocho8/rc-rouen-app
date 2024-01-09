import MainBar from "@/app/components/equipeSection/MainBar"
import SingleFeaturedPost from "@/app/components/blog/SingleFeaturedPost"

import { getPosts } from "@/sanity/sanity-utils"

const ActualitePage = async () => {
	const posts = await getPosts()

	return (
		<div>
			<MainBar menuName="actualite" />
			<div className="py-8 bg-gray-100 flex flex-col items-center">
				<div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-8 md:gap-x-4 md:gap-y-6">
					<SingleFeaturedPost display="icon" post={posts[0]} />
					<SingleFeaturedPost display="icon" post={posts[0]} />
					<SingleFeaturedPost display="icon" post={posts[0]} />
					<SingleFeaturedPost display="icon" post={posts[0]} />
					<SingleFeaturedPost display="icon" post={posts[0]} />
					<SingleFeaturedPost display="icon" post={posts[0]} />
					<SingleFeaturedPost display="icon" post={posts[0]} />
					<SingleFeaturedPost display="icon" post={posts[0]} />
					<SingleFeaturedPost display="icon" post={posts[0]} />
					<SingleFeaturedPost display="icon" post={posts[0]} />
					<SingleFeaturedPost display="icon" post={posts[0]} />
					<SingleFeaturedPost display="icon" post={posts[0]} />
				</div>
				<div className="flex flex-col justify-center items-center px-2 gap-y-3 md:hidden">
					<SingleFeaturedPost display="listIcon" post={posts[0]} />
					<SingleFeaturedPost display="listIcon" post={posts[0]} />
					<SingleFeaturedPost display="listIcon" post={posts[0]} />
					<SingleFeaturedPost display="listIcon" post={posts[0]} />
					<SingleFeaturedPost display="listIcon" post={posts[0]} />
					<SingleFeaturedPost display="listIcon" post={posts[0]} />
					<SingleFeaturedPost display="listIcon" post={posts[0]} />
					<SingleFeaturedPost display="listIcon" post={posts[0]} />
					<SingleFeaturedPost display="listIcon" post={posts[0]} />
					<SingleFeaturedPost display="listIcon" post={posts[0]} />
					<SingleFeaturedPost display="listIcon" post={posts[0]} />
					<SingleFeaturedPost display="listIcon" post={posts[0]} />
				</div>
				<button className="flex justify-center mt-8 py-2 px-3 rounded border bg-primary uppercase text-white text-xs font-medium hover:bg-opacity-80 ">
					voir plus
				</button>
			</div>
		</div>
	)
}
export default ActualitePage
