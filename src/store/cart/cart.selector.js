import { createSelector } from "reselect";

// get slice of the state
const selectCartReducer = (state) => state.cart;

// memoized the part of sliced state, update when changed
export const selectShowCart = createSelector(
	[selectCartReducer],
	(cart) => cart.showCart
);

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cart) => cart.cartItems
);

// generate cart count
export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

// generate items  Total Value
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(total, cartItem) => total + cartItem.quantity * cartItem.price,
		0
	)
);
