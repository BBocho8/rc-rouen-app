import { Product as ProductType } from "@/sanity/types/Product"
import React, { Component } from "react"
import Slider from "react-slick"
import { Product } from "."

type MayAlsoLikeCarouselProps = {
	products: ProductType[]
}

const MayAlsoLikeCarousel = ({ products }: MayAlsoLikeCarouselProps) => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 3000,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		cssEase: "linear",
		swipeToSlide: true,
		centerMode: true,
	}
	return (
		<div className="pb-12">
			<h2 className="uppercase text-center mt-16 mb-4 tracking-wide font-medium text-2xl">
				You may also like
			</h2>
			<Slider {...settings}>
				{products.map((item) => (
					<div key={item._id} className="">
						<Product product={item} />
					</div>
				))}
			</Slider>
		</div>
	)
}
export default MayAlsoLikeCarousel
