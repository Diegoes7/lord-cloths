import { useState, FormEvent, ChangeEvent } from "react";
import {AuthError, AuthErrorCodes} from 'firebase/auth';
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { Heading, SignUpContainer } from "./sign-up-form.styles";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;
	const dispatch = useDispatch();

	const resetFormFields = () => setFormFields(defaultFormFields);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do NOT match!");
			return;
		}
		try {
			dispatch(signUpStart(email, password, displayName));
			resetFormFields();
		} catch (error) {
			if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
				alert("Cannot create user, email already in use");
			} else {
				console.log("Error in user creation", (error as AuthError).message);
			}
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		// get information out of event {}
		const { name, value } = event.target;

		//spread the {} and modify one value of this {}
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignUpContainer>
			<Heading>Don't have an account?</Heading>
			<span>Sign Up with email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					type="text"
					name="displayName"
					value={displayName}
					required
					onChange={handleChange}
				/>
				<FormInput
					label="Email"
					type="email"
					name="email"
					value={email}
					required
					onChange={handleChange}
				/>
				<FormInput
					label="Password"
					type="password"
					name="password"
					value={password}
					required
					onChange={handleChange}
				/>
				<FormInput
					label="Confirm Password"
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					required
					onChange={handleChange}
				/>
				<Button type="submit">Sign Up</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUpForm;
