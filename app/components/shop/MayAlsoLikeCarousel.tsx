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

		autoplay: true,
		speed: 3000,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		cssEase: "linear",
		swipeToSlide: true,
		centerMode: true,
	}
	return (
		<>
			<div className=" md:hidden">
				<h2 className="uppercase text-center mt-16 mb-4 tracking-wide font-medium text-2xl">
					You may also like
				</h2>
				<Slider slidesToShow={2} slidesToScroll={2} {...settings}>
					{products.map((item) => (
						<div key={item._id} className="">
							<Product product={item} />
						</div>
					))}
					{products.map((item) => (
						<div key={`${item._id} - copy`} className="">
							<Product product={item} />
						</div>
					))}
					{products.map((item) => (
						<div key={`${item._id} - copy2`} className="">
							<Product product={item} />
						</div>
					))}
				</Slider>
			</div>
			<div className="pb-12 hidden md:block lg:hidden">
				<h2 className="uppercase text-center mt-16 mb-4 tracking-wide font-medium text-2xl">
					You may also like
				</h2>
				<Slider slidesToShow={3} slidesToScroll={3} {...settings}>
					{products.map((item) => (
						<div key={item._id} className="">
							<Product product={item} />
						</div>
					))}
					{products.map((item) => (
						<div key={`${item._id} - copy`} className="">
							<Product product={item} />
						</div>
					))}
					{products.map((item) => (
						<div key={`${item._id} - copy2`} className="">
							<Product product={item} />
						</div>
					))}
				</Slider>
			</div>
			<div className="pb-12 hidden lg:block">
				<h2 className="uppercase text-center mt-16 mb-4 tracking-wide font-medium text-2xl">
					You may also like
				</h2>
				<Slider slidesToShow={4} slidesToScroll={4} {...settings}>
					{products.map((item) => (
						<div key={item._id} className="">
							<Product product={item} />
						</div>
					))}
					{products.map((item) => (
						<div key={`${item._id} - copy`} className="">
							<Product product={item} />
						</div>
					))}
					{products.map((item) => (
						<div key={`${item._id} - copy2`} className="">
							<Product product={item} />
						</div>
					))}
				</Slider>
			</div>
		</>
	)
}
export default MayAlsoLikeCarousel
