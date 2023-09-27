import styled from 'styled-components'
import Button from '../button/button.component'

export const PaymentFormContainer = styled.div`
	height: 20rem;
	display: flex;
	margin-top: 2.5rem;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #b9b8cb;
	border-radius: 20px;
`
// export const

export const FormContainer = styled.form`
	height: 10rem;
	min-width: 500px;

	@media screen and (max-width: 600px) {
		min-width: unset;
	}
`

export const InputContainer = styled.div`
	background-color: white;
	margin-top: 1.7rem;
	height: 2rem;
	border-radius: 20px;
	padding: 0.5rem 0.5rem;
`

export const PaymentButton = styled(Button)`
	margin-left: auto;
	margin-top: 30px;
`
