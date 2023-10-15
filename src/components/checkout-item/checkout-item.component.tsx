import { FC, memo } from 'react'
import { useDispatch } from 'react-redux'
import {
	clearItemFromCart,
	addItemToCart,
	removeItemFromCart,
} from '../../store/cart/cart.slice'
import { CartItem } from '../../store/cart/cart.slice'

import {
	CheckoutItemContainer,
	ImageContainer,
	BaseSpan,
	Quantity,
	Arrow,
	Value,
	RemoveButton,
} from './checkout-item.styles'

type CheckoutItemProps = {
	cartItem: CartItem
}

const CheckoutItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem
	const dispatch = useDispatch()

	const clearItemHandler = () => dispatch(clearItemFromCart(cartItem))
	const addItemHandler = () => dispatch(addItemToCart(cartItem))
	const removeItemHandler = () => dispatch(removeItemFromCart(cartItem))

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img
					src={imageUrl}
					alt={`${name}`}
					style={{ borderRadius: '0.75rem' }}
				/>
			</ImageContainer>
			<BaseSpan> {name} </BaseSpan>
			<Quantity>
				<Arrow onClick={removeItemHandler}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addItemHandler}>&#10095;</Arrow>
			</Quantity>
			<BaseSpan> ${price}</BaseSpan>
			<RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	)
})

export default CheckoutItem
