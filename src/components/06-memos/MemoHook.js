import { useMemo, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/form.css";
import { procesoPesado } from "../helpers/procesoPesado";

export const MemoHook = () => {
	const { counter, increment } = useCounter(5000);
	const [show, setShow] = useState(true);

	const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
	return (
		<div>
			<h3>
				Counter: <small>{counter}</small>{" "}
			</h3>
			<hr />
			<p>{memoProcesoPesado}</p>
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
