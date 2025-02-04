import React, { useState, useMemo } from "react";
export default function useCarousel(slideLength, slideWidth, totalWidth) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [translate, setTranslate] = useState(0);
	const transition = 0.45;
	const activeSlidesLength = Math.floor(totalWidth / slideWidth);
	const nextSlide = () => {
		if (activeIndex + activeSlidesLength < slideLength) {
			setActiveIndex(activeIndex + 1);
			setTranslate((activeIndex + 1) * slideWidth);
		}
	};

	const prevSlide = () => {
		if (activeIndex === 0) {
			setActiveIndex(0);
			setTranslate(0 * slideWidth);
		} else {
			setActiveIndex(activeIndex - 1);
			setTranslate((activeIndex - 1) * slideWidth);
		}
	};

	const activeSlides = activeIndex + activeSlidesLength;

	return {
		translate,
		transition,
		nextSlide,
		prevSlide,
		activeIndex,
		activeSlides,
	};
}
