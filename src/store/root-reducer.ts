import { combineReducers } from '@reduxjs/toolkit'
import { userReducer } from './user/user.slice'
import { categoriesReducer } from './categories/category.slice'
import { cartReducer } from './cart/cart.slice'

//! root_reducer - combination of all reducers
export const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
	cart: cartReducer,
})
