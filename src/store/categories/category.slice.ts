import { createSlice } from '@reduxjs/toolkit'

//? TYPES
export type CategoriesState = {
	readonly categories: Category[]
	readonly isLoading: boolean
	readonly error: Error | null
}

export type CategoryItem = {
	id?: number
	imageUrl: string
	name: string
	price: number
}

export type Category = {
	title: string
	imageUrl: string
	items: CategoryItem[]
}

export type CategoryMap = {
	[key: string]: CategoryItem[]
}

const CATEGORY_INITIAL_STATE: CategoriesState = {
	categories: [],
	isLoading: false,
	error: null,
}

const categoriesSlice = createSlice({
	name: 'categories',
	initialState: CATEGORY_INITIAL_STATE,
	reducers: {
		fetchCategoriesStart(state) {
			state.isLoading = true
		},
		fetchCategoriesSuccess(state, action) {
			state.isLoading = false
			state.categories = action.payload
			state.error = null
		},
		fetchCategoriesFailed(state, action) {
			state.isLoading = false
			state.categories = []
			state.error = action.payload
		},
	},
})

export const {
	fetchCategoriesFailed,
	fetchCategoriesSuccess,
	fetchCategoriesStart,
} = categoriesSlice.actions
export const categoriesReducer = categoriesSlice.reducer
