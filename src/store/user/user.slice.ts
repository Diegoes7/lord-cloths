import { UserData } from '../../utils/firebase/firebase.utils'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type UserState = {
	readonly currentUser: UserData | null
	readonly isLoading: boolean
	readonly error: Error | null
}

const INITIAL_STATE: UserState = {
	currentUser: null,
	isLoading: false,
	error: null,
}

//$ just a function that return back new object, so react knows to re-render, because object is different
const userSlice = createSlice({
	name: 'user',
	initialState: INITIAL_STATE,
	reducers: {
		checkUserSession(state) {
			state.currentUser = state.currentUser
		},
		googleSignInStart(state) {
			state.isLoading = true
		},
		emailSignInStart(state, action) {
			state.isLoading = true
			state.currentUser = action.payload
		},
		signInSuccess(state, action: PayloadAction<UserData & { id: string }>) {
			state.isLoading = false
			state.currentUser = action.payload
			state.error = null
		},
		signInFailed(state, action: PayloadAction<Error>) {
			state.isLoading = false
			state.currentUser = null
			state.error = action.payload
		},
		signUpStart(state, { payload }) {
			state.isLoading = true
			state.currentUser = payload
			state.error = null
		},
		signUpSuccess(state, action) {
			const {
				user,
				additionalDetails: { displayName },
			} = action.payload
			user.displayName = displayName
			state.isLoading = false
			state.currentUser = action.payload
			state.error = null
		},
		signUpFailed(state, action) {
			state.isLoading = false
			state.currentUser = null
			state.error = action.payload
		},
		signOutStart(state) {
			state.isLoading = true
		},
		signOutSuccess(state) {
			state.isLoading = false
			state.currentUser = null
			state.error = null
		},
		signOutFailed(state, action) {
			state.isLoading = false
			state.currentUser = null
			state.error = action.payload
		},
	},
})

export const {
	checkUserSession,
	googleSignInStart,
	emailSignInStart,
	signUpStart,
	signInSuccess,
	signUpSuccess,
	signInFailed,
	signUpFailed,
	signOutFailed,
	signOutSuccess,
	signOutStart,
} = userSlice.actions

export const userReducer = userSlice.reducer
