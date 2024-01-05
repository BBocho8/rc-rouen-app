"use client"

import MainBar from "@/app/components/equipeSection/MainBar"
import SingleFeaturedPost from "@/app/components/landingPage/SingleFeaturedPost"
import image1 from "@/public/image1.jpg"
import image2 from "@/public/image2.jpg"
import image3 from "@/public/image3.jpg"
import { useParams, usePathname } from "next/navigation"

const ActualitePage = () => {
	const { equipe } = useParams()

	const menuName = usePathname().split("/")?.[3]

	return (
		<div>
			<MainBar menuName="actualite" equipe={equipe as string} />
			<div className="pt-8 bg-gray-100">
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
			</div>
		</div>
	)
}
export default ActualitePage
