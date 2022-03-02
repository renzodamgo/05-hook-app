/* eslint-disable react/display-name */
import { memo } from "react";

/* eslint-disable react/prop-types */
export const Small = memo(({ value }) => {
	console.log("me volvi a llamar");
	return <small>{value}</small>;
});
