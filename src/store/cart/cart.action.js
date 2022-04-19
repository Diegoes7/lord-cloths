import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

// Helper functions / data manipulating
const addCartItem = (cartItems, productToAdd) => {
	//find if cartItems contains productToAdd
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);
	//if found increment quantity
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	//return new array with modified cartItems / new cart item
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
	// find cart item to Remove
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);
	//check if quantity is eual to 1, if it is remove that item from cart
	if (existingCartItem.quantity === 1) {
		// keep the value if is not match the id
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	// return back cartItems with matching cart item with reduced quantity
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const clearCartItem = (cartItems, cartItemToClear) =>
	cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// Redux  Store updating/ manipulating functions
export const setShowCart = (boolean) =>
	createAction(CART_ACTION_TYPES.SET_SHOW_CART, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const newCartItems = removeCartItem(cartItems, cartItemToRemove);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
	const newCartItems = clearCartItem(cartItems, cartItemToClear);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
