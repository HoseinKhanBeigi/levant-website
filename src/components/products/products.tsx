import React from "react";
import "./products.scss";
import { Link } from "gatsby";
import productsData from './products.data';
import {StaticImage} from "gatsby-plugin-image";
import PolygonLogo from "../../../assets/icons/polygon";
export default function Products() {
	
	return (
		<div className="ProductsContainer">
			<div className="ProductsContent">
				<div className="ProductsTitle">محصولات ما را بشناسید</div>
				<div className="ProductsDesc">توضیح کوتاهی از محصولات ما</div>
			</div>
			<div className="ProductsWrapper">
				{productsData.map((value) => {
					return (
						<div className="ProductContainer">
							<span className="blueIcon" id={value.color}/>
								<div className="ProductContentWrapper">
									<div className="ProductTitle">{value.title}</div>
									<div className="ProductSubTitle">{value.name}</div>
									<div className="ProductDesc">{value.description}</div>
									<div className="ProductDescFooter">
										<div className="ProductFooter">
											<Link className="start" to={`${value.link}`}>
												شروع کنید
												<PolygonLogo/>
											</Link>
										</div>
										<StaticImage src="../../../assets/images/rectangle.svg" alt="icon" className="edgeIcon" />
									</div>
								</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
