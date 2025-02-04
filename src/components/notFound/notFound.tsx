import React from "react";
import { navigate } from "gatsby";
import "./notFound.scss";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../widgets";
export default function NotFound() {
	return (
		<div className="notFoundContainer">
			<div className="notFoundContent">
				<div className="notFoundTitle">صفحه مورد نظر شما پیدا نشد!!</div>
				<div className="notFoundDesc">
					این مورد ممكن است به دلیل اشتباه در آدرس وارد شده در مرورگر شما رخ
					داده باشد، لطفا آدرس وارد شده در مرورگر خود را بررسی کنید یا به صفحه
					اصلی بازگردید
				</div>
				<Button
					onClick={() => navigate("/")}
					type="primary"
					className="gotoMainPageButton"
				>
					<span>بازگشت به صفحه اصلی</span>
				</Button>
			</div>
			<div className="notFoundImageWrapper">
				<StaticImage src="../../../assets/images/404.svg" alt="notFound" className="notFoundImage"/>
			</div>
		</div>
	);
}
