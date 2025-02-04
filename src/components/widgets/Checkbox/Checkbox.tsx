import React from "react";
import "./checkbox.scss"
interface InputInterface {
	label: any;
	onChange?: (e:any) => void;
}
export default function CheckBox({
	label,
	onChange,

}: InputInterface) {
	return (
		<div className="checkBoxContainer">
			<div className="checkboxLabel">{label}</div>
			<input type="checkbox" id="horns" name="horns" onChange={onChange} />
		</div>
	);
}
