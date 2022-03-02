import { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/form.css";
import { Small } from "./Small";

export const Memorize = () => {
	const { counter, increment } = useCounter(1);
	const [show, setShow] = useState(true);
	return (
		<div>
			<h1>
				Counter: <Small value={counter}></Small>
			</h1>
			<hr />
			<button onClick={increment} className="btn btn-primary">
				+1
			</button>
			<button
				className="btn btn-outline-primary ms-3"
				onClick={() => setShow(!show)}
			>
				Show / Hide {JSON.stringify(show)}
			</button>
		</div>
	);
};
