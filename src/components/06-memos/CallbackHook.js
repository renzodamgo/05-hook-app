import { useCallback, useState } from "react";
import "../02-useEffect/form.css";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
	const [counter, setCounter] = useState(1);
	// const increment = () => {
	// 	setCounter(counter + 1);
	// };

	const incrementCallback = useCallback(
		(num) => {
			setCounter((c) => c + num);
		},
		[setCounter],
	);

	return (
		<div>
			<h1>Use Callback Hook: {counter}</h1>
			<hr />
			<ShowIncrement increment={incrementCallback} />
		</div>
	);
};
