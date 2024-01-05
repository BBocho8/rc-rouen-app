import MainBar from "@/app/components/equipeSection/MainBar"
import SingleFeaturedPost from "@/app/components/landingPage/SingleFeaturedPost"
import image1 from "@/public/image1.jpg"
import image2 from "@/public/image2.jpg"
import image3 from "@/public/image3.jpg"

const ActualitePage = () => {
	return (
		<div>
			<MainBar menuName="actualite" />
			<div className="py-8 bg-gray-100 flex flex-col items-center">
				<div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-8 md:gap-x-4 md:gap-y-6">
					<SingleFeaturedPost display="icon" image={image1} />
					<SingleFeaturedPost display="icon" image={image2} />
					<SingleFeaturedPost display="icon" image={image3} />
					<SingleFeaturedPost display="icon" image={image1} />
					<SingleFeaturedPost display="icon" image={image2} />
					<SingleFeaturedPost display="icon" image={image3} />
					<SingleFeaturedPost display="icon" image={image1} />
					<SingleFeaturedPost display="icon" image={image2} />
					<SingleFeaturedPost display="icon" image={image3} />
					<SingleFeaturedPost display="icon" image={image1} />
					<SingleFeaturedPost display="icon" image={image2} />
					<SingleFeaturedPost display="icon" image={image3} />
				</div>
				<div className="flex flex-col justify-center items-center px-2 gap-y-3 md:hidden">
					<SingleFeaturedPost display="listIcon" image={image1} />
					<SingleFeaturedPost display="listIcon" image={image2} />
					<SingleFeaturedPost display="listIcon" image={image3} />
					<SingleFeaturedPost display="listIcon" image={image1} />
					<SingleFeaturedPost display="listIcon" image={image2} />
					<SingleFeaturedPost display="listIcon" image={image3} />
					<SingleFeaturedPost display="listIcon" image={image1} />
					<SingleFeaturedPost display="listIcon" image={image2} />
					<SingleFeaturedPost display="listIcon" image={image3} />
					<SingleFeaturedPost display="listIcon" image={image1} />
					<SingleFeaturedPost display="listIcon" image={image2} />
					<SingleFeaturedPost display="listIcon" image={image3} />
				</div>
				<button className="flex justify-center mt-8 py-2 px-3 rounded border bg-primary uppercase text-white text-xs font-medium hover:bg-opacity-80 ">
					voir plus
				</button>
			</div>
		</div>
	)
}
export default ActualitePage
