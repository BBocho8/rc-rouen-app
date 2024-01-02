import Image from "next/image"

type SingleFeaturedPostProps = {
	display: "icon" | "list" | "listIcon"
	image?: any
}

const SingleFeaturedPost = ({ display, image }: SingleFeaturedPostProps) => {
	return (
		<>
			{display === "icon" && (
				<div className="flex flex-col gap-y-2">
					<Image
						src={image}
						width={0}
						height={0}
						alt="postimage"
						className="aspect-3/2 object-cover w-full"
					/>
					<div className="flex justify-start items-center gap-x-2">
						<span className="text-primary uppercase text-xs font-semibold">
							équipe première
						</span>
						<div className="border-l border-l-gray-300 h-4 md:h-6 "></div>
						<span className="text-body text-xs font-light">
							1er janvier 2024
						</span>
					</div>
					<p className="font-bold text-lg text-body">
						Josué Lagui: «Je suis prêt à relever ce nouveau défi»
					</p>
				</div>
			)}

			{display === "list" && (
				<div className="border-l-4 border-l-gray-300 pl-4 flex flex-col gap-y-2 py-2 max-h-20">
					<p className="font-bold  text-body">
						Josué Lagui: «Je suis prêt à relever ce nouveau défi»
					</p>
					<div className="flex justify-start items-center gap-x-2">
						<span className="text-primary uppercase text-xs font-semibold">
							équipe première
						</span>
						<div className="border-l border-l-gray-300 h-4 md:h-6 "></div>
						<span className="text-body text-xs font-light">
							1er janvier 2024
						</span>
					</div>
				</div>
			)}

			{display === "listIcon" && (
				<div className="flex justify-start items-center gap-x-2">
					<Image
						src={image}
						width={100}
						height={100}
						alt="imageart"
						className="aspect-square "
					/>

					<div className="  flex flex-col gap-y-2 py-2">
						<div className="flex justify-start items-center gap-x-2">
							<span className="text-primary uppercase text-xs font-semibold">
								équipe première
							</span>
							<div className="border-l border-l-gray-300 h-4 md:h-6 "></div>
							<span className="text-body text-xs font-light">
								1er janvier 2024
							</span>
						</div>
						<p className="font-bold  text-body">
							Josué Lagui: «Je suis prêt à relever ce nouveau défi»
						</p>
					</div>
				</div>
			)}
		</>
	)
}
export default SingleFeaturedPost
