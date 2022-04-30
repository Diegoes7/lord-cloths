import { useState, FormEvent, ChangeEvent } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useDispatch } from "react-redux";
import {
	googleSignInStart,
	emailSignInStart,
} from "../../store/user/user.action";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
	SignInContainer,
	SignInHeading,
	ButtonContainer,
} from "./sign-in-form.styles";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const dispatch = useDispatch();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => setFormFields(defaultFormFields);

	const signWithGoogle = async () => {
		dispatch(googleSignInStart());
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			dispatch(emailSignInStart(email, password));
			resetFormFields();
		} catch (error) {
			if ((error as AuthError).code === AuthErrorCodes.INVALID_PASSWORD) {
				alert("Incorrect password for email!");
			} else if ((error as AuthError).code === AuthErrorCodes.USER_MISMATCH) {
				alert("No User associate with this email.");
			} else {
				console.log(error);
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
		<SignInContainer>
			<SignInHeading>Already have an account?</SignInHeading>
			<span>Sign In with email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					type="email"
					name="email"
					value={email}
					required
					onChange={handleChange}
					autoFocus
				/>
				<FormInput
					label="Password"
					type="password"
					name="password"
					value={password}
					required
					onChange={handleChange}
				/>
				<ButtonContainer>
					<Button type="submit">Sign In</Button>
					<Button
						type="button"
						buttonType={BUTTON_TYPE_CLASSES.google}
						onClick={signWithGoogle}
					>
						Google Sign In
					</Button>
				</ButtonContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
