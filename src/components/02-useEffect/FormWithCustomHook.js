import { useForm } from "../../hooks/useForm";
import "./form.css";

export const FormWithCustomHook = () => {
	const [formValues, handleInputChange, handleSubmit] = useForm({
		name: "",
		email: "",
		password: "",
	});
	const { name, email, password } = formValues;

	return (
		<form onSubmit={handleSubmit}>
			<h1>Form with custom hook</h1>
			<hr />

			<div className="form-group">
				<label htmlFor="name">Nombre</label>
				<input
					type="text"
					name="name"
					className="form-control"
					placeholder="Tu nombre"
					autoComplete="off"
					value={name}
					onChange={handleInputChange}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					className="form-control"
					placeholder="Tu email"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="email">Password</label>
				<input
					type="password"
					name="password"
					className="form-control"
					placeholder="*******"
					value={password}
					onChange={handleInputChange}
				/>
			</div>

			<button type="submit" className="btn btn-primary">
				Guardar
			</button>
		</form>
	);
};
