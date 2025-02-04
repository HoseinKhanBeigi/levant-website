import React from "react";
import "./explanation.scss";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../widgets";
interface ExplanationInterface {
	image: any;
	title: string;
	description: string;
}
export default function Explanation({
	image,
	title,
	description,
}: ExplanationInterface) {
	return (
		<div className="ExplanationContainer">
			<div className="ExplanationContent">
				<div className="ExplanationTitle">{title}</div>
				<div className="ExplanationDesc">{description}</div>
			</div>
			{image}
		</div>
	);
}
