import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import {
	CartIconCointainer,
	ItemCount,
	ShoppingIcon,
} from "./cart-icon.styles";

const CartIcon = () => {
	const { showCart, setShowCart, cartCount } = useContext(CartContext);
	const toggleIsCartShown = () => setShowCart(!showCart);

	return (
		<CartIconCointainer onClick={toggleIsCartShown}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconCointainer>
	);
};

export default CartIcon;
