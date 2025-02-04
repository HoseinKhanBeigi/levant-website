import { toast } from "react-toastify";
import { MessageOptionsInterface } from "../../../interfaces";
export default function showMessage(
	message: string | JSX.Element,
	options: MessageOptionsInterface
) {
	const messageConfig: MessageOptionsInterface = {
		position: "top-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		Theme: "dark",
		style: {
			backgroundColor: "#1c1c1c",
			direction: "rtl",
			color: "#fefefe",
			fontSize: "14px",
			padding: "16px",
			borderRadius: "4px",
			boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.4)",
		},
		progressStyle: {
			direction: "rtl",
			transformOrigin: "rigth",
			backgroundColor: "#0058ff",
		},
		type: options.type,
	};
	return toast(message, messageConfig);
}
