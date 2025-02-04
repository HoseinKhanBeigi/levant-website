import React, { useState, useMemo } from "react";
import "./carousel.scss";
import ProductListIntroduction from "../ProductIntro/productListIntroduction";
import { Button } from "../widgets";
import useCarousel from "./useCarousel";
interface CarouselProps {
	products: Array<any>;
}
export default function Carousel({ products }: CarouselProps) {
	const {
		translate,
		transition,
		nextSlide,
		prevSlide,
		activeIndex,
		activeSlides
	} = useCarousel(products.length, 340, 1152);

	const activeLeftArrow = useMemo(() => {
		if (activeSlides < products.length) {
			return true;
		} else {
			return false;
		}
	}, [activeIndex, activeSlides]);

	const activeRightArrow = useMemo(() => {
		if (activeIndex === 0) {
			return false;
		} else {
			return true;
		}
	}, [activeIndex]);

	return (
		<div className="carouselContainer">
			<div
				style={{
					transform: `translateX(${translate}px)`,
					transition: `transform ease-out ${transition}s`,
					width: 340 * products.length,
					height: `100%`,
					display: `flex`,
				}}
			>
				{products.map((product, index) => {
					if (index >= activeIndex && index < activeSlides) {
						return <ProductListIntroduction product={product} />;
					} else {
						return <div className="deActiveSlides" />;
					}
				})}
			</div>
			<Button
				onClick={nextSlide}
				type="link"
				className={`arrowLeftButton ${
					!activeLeftArrow ? "deActiveArrow" : null
				}`}
			>
				<span className="icon-left-arrow" />
			</Button>
			<Button
				onClick={prevSlide}
				type="link"
				className={`arrowRightButton ${
					!activeRightArrow ? "deActiveArrow" : null
				}`}
			>
				<span className="icon-right-arrow" />
			</Button>
		</div>
	);
}
