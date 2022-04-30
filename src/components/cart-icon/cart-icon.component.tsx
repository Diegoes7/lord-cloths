import { useDispatch, useSelector } from "react-redux";
import { selectShowCart, selectCartCount } from "../../store/cart/cart.selector";
import { setShowCart } from "../../store/cart/cart.action";
import {
	CartIconCointainer,
	ItemCount,
	ShoppingIcon,
} from "./cart-icon.styles";

const CartIcon = () => {
	const dispatch = useDispatch()

	const cartCount = useSelector(selectCartCount)
	const showCart = useSelector(selectShowCart);
	const toggleIsCartShown = () => dispatch(setShowCart(!showCart))	;

	return (
		<CartIconCointainer onClick={toggleIsCartShown}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconCointainer>
	);
};

export default CartIcon;
