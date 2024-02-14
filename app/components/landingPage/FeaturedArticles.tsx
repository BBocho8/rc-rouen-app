import { Post } from "@/sanity/types/Post"
import SingleFeaturedPost from "../blog/SingleFeaturedPost"

type FeaturedArticlesProps = {
	posts: Post[]
}

const FeaturedArticles = ({ posts }: FeaturedArticlesProps) => {
	return (
		<section className="flex flex-col items-center py-10 px-4 lg:px-10 gap-y-8">
			<div className="grid gap-y-4   md:grid-cols-2 md:gap-x-6 md:gap-y-8 lg:gap-y-0 lg:grid-cols-3  ">
				<div>
					<SingleFeaturedPost display="icon" post={posts[0]} />
				</div>
				<div className="md:hidden">
					<SingleFeaturedPost display="listIcon" post={posts[1]} />
				</div>
				<div className="hidden md:block">
					<SingleFeaturedPost display="icon" post={posts[1]} />
				</div>
				<div className="grid grid-rows-4 sm:grid-rows-1 gap-y-4   px-2 sm:px-0 md:col-span-2 lg:col-span-1 md:grid-cols-2 md:gap-x-4 md:gap-y-4  lg:grid-cols-1 lg:gap-y-4 lg:my-auto ">
					<SingleFeaturedPost display="list" post={posts[0]} />
					<SingleFeaturedPost display="list" post={posts[1]} />
					<SingleFeaturedPost display="list" post={posts[2]} />
					<div className="lg:hidden">
						<SingleFeaturedPost display="list" post={posts[0]} />
					</div>
				</div>
			</div>
			<div className="grid grid-rows-4 gap-y-4 md:hidden">
				<SingleFeaturedPost display="listIcon" post={posts[0]} />
				<SingleFeaturedPost display="listIcon" post={posts[1]} />
				<SingleFeaturedPost display="listIcon" post={posts[2]} />
				<div className="lg:hidden">
					<SingleFeaturedPost display="listIcon" post={posts[0]} />
				</div>
			</div>
			<div className="hidden md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:grid-cols-3 lg:gap-x-8 ">
				<SingleFeaturedPost display="icon" post={posts[0]} />
				<SingleFeaturedPost display="icon" post={posts[1]} />
				<SingleFeaturedPost display="icon" post={posts[2]} />
				<div className="lg:hidden">
					<SingleFeaturedPost display="icon" post={posts[0]} />
				</div>
			</div>
		</section>
	)
}
export default FeaturedArticles
