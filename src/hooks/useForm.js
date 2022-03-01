import { useState } from "react";

export const useForm = (initialState) => {
	const [formValues, setFormValues] = useState(initialState);

	const handlInputChange = ({ target }) => {
		setFormValues({
			...formValues,
			[target.name]: target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formValues);
	};

	return [formValues, handlInputChange, handleSubmit];
};
