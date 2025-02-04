import React from "react";
import "./businessRequirements.scss";
import { BusinessRequirementsData } from "./BusinessRequirements.data";
export default function BusinessRequirements() {
	return (
		<div className="businessRequirementContainer">
			<div className="businessRequirementWrapper">
				<div className="requirementContent">
					<div className="requirementTitle">
						متناسب با نیازهای کسب‌و‌کار شما
					</div>
					<div className="requirementDesc">
						لوانت کمک می‌کند راحت‌تر به اهداف خود برسید
					</div>
				</div>
				<div className="itemWrapper">
					{BusinessRequirementsData.map((item) => {
						return (
							<div className="itemContainer">
								<div className="requirementImageWrapper">{item.icon}</div>
								<div className="itemTitle">{item.title}</div>
								<div className="itemDes">{item.description}</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
