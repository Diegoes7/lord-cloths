import { CartItem } from "./cart.types";
import { setShowCart, setCartItems } from "./cart.action";
import { AnyAction } from "redux";

export type CartState = {
	readonly showCart: boolean;
	readonly cartItems: CartItem[];
};

const CART_INITIAL_STATE: CartState = {
	showCart: false,
	cartItems: [],
};

export const cartReducer = (
	state = CART_INITIAL_STATE,
	action: AnyAction,
): CartState => {
	if (setShowCart.match(action)) return { ...state, showCart: action.payload };

	if (setCartItems.match(action))
		return { ...state, cartItems: action.payload };

	return state;
};
