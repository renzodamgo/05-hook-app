import { useEffect, useState } from "react";

export const Message = () => {
	const [coords, setCoords] = useState({
		x: 0,
		y: 0,
	});
	const { x, y } = coords;
	useEffect(() => {
		console.log("Componente montado");
		const mouseMove = ({ x, y }) => {
			setCoords({ x: x, y: y });
		};
		window.addEventListener("mousemove", mouseMove);

		return () => {
			window.removeEventListener("mousemove", mouseMove);
			console.log("Componente desmontado");
		};
	}, []);

	return (
		<>
			<h3>Eres Genial</h3>
			<p>
				x:{x}, y:{y}
			</p>
		</>
	);
};
