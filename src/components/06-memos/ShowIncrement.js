/* eslint-disable react/display-name */
import { memo } from "react";

/* eslint-disable react/prop-types */
export const ShowIncrement = memo(({ increment }) => {
	console.log("Me volví a generar");
	return (
		<button onClick={() => increment(5)} className="btn btn-primary">
			+1
		</button>
	);
});
