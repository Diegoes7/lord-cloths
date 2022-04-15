import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	Total,
} from "./checkout.styles";

const Checkout = () => {
	const { cartItems, setShowCart, cartTotal } = useContext(CartContext);

	useEffect(() => {
		setShowCart(false);
	}, [setShowCart]);

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
		</CheckoutContainer>
	);
};

export default Checkout;

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
