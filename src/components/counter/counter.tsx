import React, { useEffect, useState } from "react";
import Utils from "../../../lib/utils";

export default function Counter({ number, initialValue }) {
	const [count, setCount] = useState(initialValue);
	const duration = 5;
	useEffect(() => {
		let start = initialValue;
		let end = parseInt(number);
		if (start === end) return Utils.toFarsiNumber(number);
		let incrementTime = (duration / end) * 700;
		let timer = setInterval(() => {
			start += 1;
			setCount(start);
			if (start === end) clearInterval(timer);
		}, incrementTime);
	}, [duration]);
	return <>{Utils.toFarsiNumber(count)}</>;
}
