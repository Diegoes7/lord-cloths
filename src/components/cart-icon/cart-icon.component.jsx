import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import "./cart-icon.styles.scss";

const CartIcon = () => {
	const { showCart, setShowCart, cartCount } = useContext(CartContext);
	const toggleIsCartShown = () => setShowCart(!showCart);

	return (
		<div onClick={toggleIsCartShown} className="cart-icon-container">
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{cartCount}</span>
		</div>
	);
};

export default CartIcon;
