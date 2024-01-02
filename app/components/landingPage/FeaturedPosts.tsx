import SingleFeaturedPost from "./SingleFeaturedPost"
import image1 from "@/public/image1.jpg"
import image2 from "@/public/image2.jpg"
import image3 from "@/public/image3.jpg"
const FeaturedPosts = () => {
	return (
		<div className="grid p-4 gap-y-4 md:grid-cols-2 md:gap-x-4 md:gap-y-12 lg:grid-cols-3  lg:p-0 lg:py-12 lg:px-16">
			<SingleFeaturedPost display="icon" image={image1} />
			<SingleFeaturedPost display="icon" image={image2} />
			<div className="flex flex-col gap-y-4 justify-center">
				<SingleFeaturedPost display="list" />
				<SingleFeaturedPost display="list" />
				<SingleFeaturedPost display="list" />
				<SingleFeaturedPost display="list" />
			</div>
			<div className="flex flex-col gap-y-4 justify-start">
				<SingleFeaturedPost display="listIcon" image={image1} />
				<SingleFeaturedPost display="listIcon" image={image2} />
				<SingleFeaturedPost display="listIcon" image={image3} />
			</div>
			<SingleFeaturedPost display="icon" image={image3} />
			<div className="flex flex-col gap-y-4 justify-center">
				<SingleFeaturedPost display="list" />
				<SingleFeaturedPost display="list" />
				<SingleFeaturedPost display="list" />
				<SingleFeaturedPost display="list" />
			</div>
			<div className="flex flex-col gap-y-4 justify-start">
				<SingleFeaturedPost display="listIcon" image={image2} />
				<SingleFeaturedPost display="list" />
				<SingleFeaturedPost display="listIcon" image={image1} />
			</div>
			<SingleFeaturedPost display="icon" image={image1} />

			<SingleFeaturedPost display="icon" image={image2} />
		</div>
	)
}
export default FeaturedPosts
