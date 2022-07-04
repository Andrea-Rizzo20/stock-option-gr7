import { useState } from "react";
import { useTranslation } from "react-i18next";

const SignUpForm = ({ showModal }) => {
	const [data, setData] = useState({
		email: "",
		firstName: "",
		lastName: "",
		phone: "",
		password: "",
		confPassword: "",
		contract: false,
	});

	const { t } = useTranslation();

	const inputHandle = (event) => {
		const { name, type, value, checked } = event.target;
		setData((data) => {
			return {
				...data,
				[name]: type !== "checkbox" ? value : checked,
			};
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (
			data !==
			{
				email: "",
				firstName: "",
				lastName: "",
				phone: "",
				password: "",
				confPassword: "",
				contract: false,
			}
		) {
			localStorage.setItem("database", JSON.stringify(data));
			setData({
				email: "",
				firstName: "",
				lastName: "",
				phone: "",
				password: "",
				confPassword: "",
				contract: false,
			});
			showModal();
		}
		if (localStorage.getItem("database")) {
			alert(t("header.signUpForm.alert"));
		}
	};

	return (
		<form
			className="d-flex flex-column align-items-center gap-3 py-3"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				pattern="[A-Za-z]{1,32}"
				name="firstName"
				required
				value={data.firstName}
				placeholder={t("header.signUpForm.firstName")}
				className="inputForm text-center"
				onChange={inputHandle}
			></input>
			<input
				type="text"
				pattern="[A-Za-z]{1,32}"
				name="lastName"
				required
				value={data.lastName}
				placeholder={t("header.signUpForm.lastName")}
				className="inputForm text-center"
				onChange={inputHandle}
			></input>
			<input
				type="email"
				name="email"
				required
				value={data.email}
				placeholder={t("header.signUpForm.email")}
				className="inputForm text-center"
				onChange={inputHandle}
			></input>
			<input
				type="password"
				name="password"
				required
				value={data.password}
				placeholder={t("header.signUpForm.password")}
				className="inputForm text-center"
				onChange={inputHandle}
			></input>
			<input
				type="password"
				name="confPassword"
				required
				value={data.confPassword}
				placeholder={t("header.signUpForm.confirmPassword")}
				className="inputForm text-center"
				onChange={inputHandle}
			></input>
			<input
				type="tel"
				pattern="[0-9]{10}"
				name="phone"
				required
				value={data.phone}
				placeholder={t("header.signUpForm.phone")}
				className="inputForm text-center"
				onChange={inputHandle}
			></input>
			<div className="d-flex gap-2">
				<input
					type="checkbox"
					checked={data.contract}
					name="contract"
					required
					id="contract"
					onChange={inputHandle}
				></input>
				<label className="text-white fw-bold" htmlFor="contract">
					{t("header.signUpForm.contract")}
				</label>
			</div>
			<button type="submit" className="formButton heroBGButton">
				{t("header.signUpForm.signUp")}
			</button>
		</form>
	);
};

export default SignUpForm;
