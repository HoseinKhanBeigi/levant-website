import React from "react";
import "./productsImage.scss";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../widgets";
export default function ProductsImage() {
	return (
		<div className="productsImageWrapper">
			<StaticImage
				src="../../../assets/images/showcase.png"
				alt="introduction"
				layout="fixed"
				className="productsImage"
			/>
		</div>
	);
}
