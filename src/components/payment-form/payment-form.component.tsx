import { useState, FormEvent } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { StripeCardElement } from '@stripe/stripe-js'
import { useSelector } from 'react-redux'

import { selectCartTotal } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'

import { BUTTON_TYPE_CLASSES } from '../button/button.component'

import {
	FormContainer,
	PaymentButton,
	PaymentFormContainer,
	InputContainer,
} from './payment-form.styles'

const isValidCardElement = (
	card: StripeCardElement | null
): card is StripeCardElement => card !== null

const PaymentForm = () => {
	const stripe = useStripe()
	const elements = useElements()
	const amount = useSelector(selectCartTotal)
	const currentUser = useSelector(selectCurrentUser)
	const [isProcessingPayment, setIsProcessingPayment] = useState(false)

	const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!stripe || !elements) {
			return
		}
		setIsProcessingPayment(true)

		const response = await fetch('/.netlify/functions/create-payment-intent', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ amount: amount * 100 }),
		}).then((res) => res.json())

		const {
			paymentIntent: { client_secret },
		} = response

		const cardDetails = elements.getElement(CardElement)

		if (!isValidCardElement(cardDetails)) return

		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: cardDetails,
				billing_details: {
					name: currentUser ? currentUser.displayName : 'Guest',
					// email:  currentUser?.email
				},
			},
		})

		setIsProcessingPayment(false)

		if (paymentResult.error) {
			alert(paymentResult.error.message)
		} else {
			if (paymentResult.paymentIntent.status === 'succeeded') {
				alert('Payment Successful!')
			}
		}
	}

	return (
		<>
			<PaymentFormContainer>
				<FormContainer onSubmit={paymentHandler}>
					<h2>Credit Card Payment: </h2>
					<InputContainer>
						<CardElement />
					</InputContainer>
					<PaymentButton
						buttonType={BUTTON_TYPE_CLASSES.inverted}
						isLoading={isProcessingPayment}
					>
						Pay Now
					</PaymentButton>
				</FormContainer>
			</PaymentFormContainer>
			<div>
				<h1>Example Credit Card, to test the payment</h1>
				<br />
				{'Credit card example number - 4242 4242 4242 4242'}
				<br />
				{'month and year after the today'}
				<br />
				{'424 24242'}
			</div>
		</>
	)
}

export default PaymentForm
