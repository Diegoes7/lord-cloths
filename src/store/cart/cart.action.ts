import { CategoryItem } from '../categories/category.types'
import { CART_ACTION_TYPES, CartItem } from './cart.types'
import {
	createAction,
	withMatcher,
	ActionWithPayload,
} from '../../utils/reducer/reducer.utils'

//$ Helper functions / data manipulating
const findCartItem = (cartItems: CartItem[], findItem: CategoryItem) => {
	return cartItems.find((cartItem) => cartItem.id === findItem.id)
}

const addCartItem = (
	cartItems: CartItem[],
	productToAdd: CategoryItem
): CartItem[] => {
	//find if cartItems contains productToAdd
	// const existingCartItem = cartItems.find(
	// 	(cartItem) => cartItem.id === productToAdd.id
	// )
	const existingCartItem = findCartItem(cartItems, productToAdd)
	//! if found increment quantity
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		)
	}
	//! return new array with modified cartItems / new cart item
	return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (
	cartItems: CartItem[],
	cartItemToRemove: CartItem
): CartItem[] => {
	//! find cart item to Remove
	const existingCartItem = findCartItem(cartItems, cartItemToRemove)
	//check if quantity is equal to 1, if it is remove that item from cart
	if (/* existingCartItem && */ existingCartItem?.quantity === 1) {
		//! keep the value if is not match the ID
		//! return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
		return clearCartItem(cartItems, cartItemToRemove)
	}

	//! return back cartItems with matching cart item with reduced quantity
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	)
}

const clearCartItem = (
	cartItems: CartItem[],
	cartItemToClear: CartItem
): CartItem[] =>
	cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)

//? TypeScript ()
export type SetIsShowCart = ActionWithPayload<
	CART_ACTION_TYPES.SET_SHOW_CART,
	boolean
>

export type SetCartItems = ActionWithPayload<
	CART_ACTION_TYPES.SET_CART_ITEMS,
	CartItem[]
>

//$ Redux Store action creators - trigger action functions.
export const setShowCart = withMatcher(
	(boolean: boolean): SetIsShowCart =>
		createAction(CART_ACTION_TYPES.SET_SHOW_CART, boolean)
)

//! optimize the actions, all return dynamic variation of cartItem[], 
//! the difference is what is the content of the cart item array
export const setCartItems = withMatcher(
	(cartItems: CartItem[]): SetCartItems =>
		createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
)

export const addItemToCart = (
	cartItems: CartItem[],
	productToAdd: CategoryItem
) => {
	const newCartItems = addCartItem(cartItems, productToAdd)
	return setCartItems(newCartItems)
}

export const removeItemFromCart = (
	cartItems: CartItem[],
	cartItemToRemove: CartItem
) => {
	const newCartItems = removeCartItem(cartItems, cartItemToRemove)
	return setCartItems(newCartItems)
}

export const clearItemFromCart = (
	cartItems: CartItem[],
	cartItemToClear: CartItem
) => {
	const newCartItems = clearCartItem(cartItems, cartItemToClear)
	return setCartItems(newCartItems)
}

//reducer
// const updateCartReducer = (newCartItems) => {
// 	const [{ cartItems, cartCount, cartTotal }, dispatch] = useReducer(
// 		cartReducer,
// 		INITIAL_STATE
// 	)
// 	//*
//* 	  generate newCartTotal
//* 		generateNewCartCount
//* 
//
//* 	dispatch({
//* 		type: '',
//* 		payload: {
//* 			cartITems: newCartItems,
//* 			cartTotal: newCartTotal,
//* 			cartCount: newCartCount,
//* 		},
//* 	})

//* 	/*
//* 	  dispatch a new action with payload = {
//* 	      newCartItems,
//* 				newCartTotal,
//* 			  newCartCount
//* 		}
//* }
