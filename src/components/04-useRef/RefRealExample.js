import { useState } from "react";
import "../02-useEffect/form.css";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const RefRealExample = () => {
	const [show, setShow] = useState(false);

	return (
		<div>
			<h1>Real Example</h1>
			<hr />
			{show && <MultipleCustomHooks />}
			<button onClick={() => setShow(!show)} className="btn btn-primary mt-5">
				Show / Hide
			</button>
		</div>
	);
};
