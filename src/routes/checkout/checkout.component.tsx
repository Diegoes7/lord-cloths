import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectCartTotal,
	selectCartItems,
} from '../../store/cart/cart.selector'
import { setShowCart } from '../../store/cart/cart.slice'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
// import PaymentForm from "../../components/payment-form/payment-form.component";

import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	Total,
} from './checkout.styles'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button/button.component'

const Checkout = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const cartItems = useSelector(selectCartItems)
	const cartTotal = useSelector(selectCartTotal)
	const emptyCart = cartItems.length <= 0

	useEffect(() => {
		dispatch(setShowCart(false))
	}, [dispatch])

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<Total>Total: ${cartTotal}</Total>
			{/* <PaymentForm /> */}
			<Button disabled={emptyCart} onClick={() => navigate('/payment')}>
				{emptyCart ? 'Nothing to pay' : 'Payment'}
			</Button>
		</CheckoutContainer>
	)
}

export default Checkout

// {cartItems.map((cartItem) => {
//     const { name, id, quantity } = cartItem;
//     return (
//         <div key={id}>
//             <h2>{name}</h2>
//             <h2>{quantity}</h2>
//             <span onClick={() => addItemToCart(cartItem)}>increment</span>
//             <br />
//             <span onClick={() => removeItemFromCart(cartItem)}>
//                 decrement
//             </span>
//         </div>
//     );
// })}
