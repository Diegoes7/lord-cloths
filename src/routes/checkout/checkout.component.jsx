import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
	const { cartItems, setShowCart, cartTotal } =
		useContext(CartContext);

	useEffect(() => {
		setShowCart(false);
	}, []);

	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<span className="total">Total: ${cartTotal}</span>
		</div>
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
