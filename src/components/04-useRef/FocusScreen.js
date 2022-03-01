/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { useRef } from "react";
import "../02-useEffect/form.css";

export const FocusScreen = () => {
	const inputRef = useRef();
	const handleClick = () => {
		inputRef.current.select();
		console.log(inputRef);
	};
	return (
		<div>
			<h1>dsads</h1>
			<hr />
			<input
				ref={inputRef}
				type="text"
				className="form-control mb-5"
				placeholder="Su Nombre"
			/>
			<button className="btn btn-outline-primary" onClick={handleClick}>
				Focus
			</button>
		</div>
	);
};
