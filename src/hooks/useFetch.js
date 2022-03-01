import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
	const [state, setState] = useState({
		data: null,
		loading: true,
		error: null,
	});

	const thisMounted = useRef(true);
	useEffect(() => {
		return () => {
			thisMounted.current = false;
		};
	}, []);

	useEffect(() => {
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				setTimeout(() => {
					if (thisMounted.current) {
						setState({
							data: data,
							loading: false,
							error: null,
						});
					} else {
						console.log("Set state no se llamó");
					}
				}, 1000);
			});
	}, [url]);
	return state;
};
