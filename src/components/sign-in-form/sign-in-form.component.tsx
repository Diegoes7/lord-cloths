import React, { useState, FormEvent, ChangeEvent } from 'react'
import { AuthError, AuthErrorCodes } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import {
	googleSignInStart,
	emailSignInStart,
} from '../../store/user/user.slice'
import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

import {
	SignInContainer,
	SignInHeading,
	ButtonContainer,
	NotificationLogInUser,
} from './sign-in-form.styles'
import { selectCurrentUser } from '../../store/user/user.selector'
import { useNavigate } from 'react-router-dom'

const defaultFormFields = {
	email: '',
	password: '',
}

const SignInForm = () => {
	const nav = useNavigate()
	const dispatch = useDispatch()
	const signInUser = useSelector(selectCurrentUser)
	const [formFields, setFormFields] = useState(defaultFormFields)
	const { email, password } = formFields
	const existingUser = signInUser !== null
	const disabledBtn = email === '' || password === ''

	const resetFormFields = () => setFormFields(defaultFormFields)

	const signWithGoogle = async () => {
		dispatch(googleSignInStart())
	}

	React.useEffect(() => {
		if (signInUser) {
			console.log(existingUser)
			setTimeout(() => nav('/'), 1000)
		}
	}, [existingUser, nav, signInUser])

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		try {
			dispatch(emailSignInStart(formFields))
			resetFormFields()
		} catch (error) {
			if ((error as AuthError).code === AuthErrorCodes.INVALID_PASSWORD) {
				alert('Incorrect password for email!')
			} else if ((error as AuthError).code === AuthErrorCodes.USER_MISMATCH) {
				alert('No User associate with this email.')
			} else {
				console.log(error)
			}
		}
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		// get information out of event {}
		const { name, value } = event.target
		//spread the {} and modify one value of this {}
		setFormFields({ ...formFields, [name]: value })
	}

	const logInUserMessage = (
		<NotificationLogInUser>
			'Already have a logged in user! Please sign out, if you want to log in to
			another account or create account.{' '}
		</NotificationLogInUser>
	)

	return (
		<SignInContainer>
			{existingUser && logInUserMessage}
			<SignInHeading>Already have an account?</SignInHeading>
			<span>Sign In with email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					type='email'
					name='email'
					value={email}
					required
					onChange={handleChange}
					autoFocus
					disabled={existingUser}
				/>
				<FormInput
					label='Password'
					type='password'
					name='password'
					value={password}
					required
					onChange={handleChange}
					disabled={existingUser}
				/>
				<ButtonContainer>
					<Button title='Sing in' type='submit' disabled={disabledBtn}>
						Sign In
					</Button>
					<Button
						title='Use your google account to Sign in'
						type='button'
						buttonType={BUTTON_TYPE_CLASSES.google}
						onClick={signWithGoogle}
						// disabled={disabledBtn}
					>
						Google Sign In
					</Button>
				</ButtonContainer>
			</form>
		</SignInContainer>
	)
}

export default SignInForm
