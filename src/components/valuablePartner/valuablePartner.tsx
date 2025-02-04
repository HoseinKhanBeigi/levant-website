import React, { useEffect, useState } from "react";
import "./valuablePartner.scss";
import valuablePartnerData from "./valuablePartner.data";
export default function ValuablePartner({ value, title, description }) {
	const [valuablePartnerValue, setValuablePartnerValue] = useState<Array<any>>();
	useEffect(() => {
		if (value) {
			setValuablePartnerValue(value);
		} else {
			setValuablePartnerValue(valuablePartnerData);
		}
	}, [value]);
	return (
		<div className="valuablePartnerContainer">
			<div className="valuablePartnerContent">
				<div className="valuablePartnerTitle">{title}</div>
				<div className="valuablePartnerDesc">{description}</div>
			</div>
			<div className="valuesWrapper">
				{valuablePartnerValue?.map((value) => {
					return (
						<div className="valueContainer">
							<div className="valueIconWrapper">{value.icon}</div>
							<div className="valueTitle">{value.title}</div>
							<div className="valueDesc">{value.description}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
