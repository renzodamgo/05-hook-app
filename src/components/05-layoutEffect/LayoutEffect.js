import { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/form.css";

export const LayoutEffect = () => {
	const { counter, increment } = useCounter(1);
	const { data } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`,
	);

	const pTag = useRef();
	const { quote } = !!data && data[0];
	const [boxSize, setBoxSize] = useState({});

	useLayoutEffect(() => {
		setBoxSize(pTag.current.getBoundingClientRect());
	}, [quote]);

	return (
		<div>
			<h1>Breaking Bad Quotes</h1>
			<hr />

			<blockquote className="blockquote text-right">
				<p className="" ref={pTag}>
					{quote}
				</p>
			</blockquote>
			<pre>{JSON.stringify(boxSize, null, 3)}</pre>

			<button onClick={increment} className="btn btn-primary">
				Siguiente frase
			</button>
		</div>
	);
};
