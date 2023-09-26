import { AnyAction } from 'redux'
import { UserData } from '../../utils/firebase/firebase.utils'
import {
	signInSuccess,
	signOutSuccess,
	signOutFailed,
	signInFailed,
	signUpFailed,
} from './user.action'

export type UserState = {
	readonly currentUser: UserData | null
	readonly isLoading: boolean
	readonly error: Error | null
	readonly value?: number
}

const INITIAL_STATE: UserState = {
	currentUser: null,
	isLoading: false,
	error: null,
}

//$ just a function that return back new object, so react knows to re-render, because object is different
//! change the object /properties & values/ inside it, based on the action
export const userReducer = (
	state = INITIAL_STATE,
	action: AnyAction
): UserState => {
	if (signInSuccess.match(action))
		return { ...state, currentUser: action.payload }

	if (signOutSuccess.match(action)) return { ...state, currentUser: null }

	if (
		signInFailed.match(action) ||
		signOutFailed.match(action) ||
		signUpFailed.match(action)
	)
		return { ...state, error: action.payload }

	return state
}

// Test
//* const userReducer2 = (state: UserState, action: AnyAction) => {
// 	const { type, payload } = action

// 	switch (type) {
// 		case 'SET_CURRENT_USER':
// 			return {
// 				...state,
// 				currentUser: payload,
// 			}
// 		case 'increment':
// 			return { value: state.value && state.value + 1 }
// 		default:
// 			throw new Error(`Unhandled type ${type} in userReducer`)
// 	}
// }

//* state object- current values store in it,
// //* dispatch (pass a action object)
// const [state, dispatch] = userReducer(userReducer2, INITIAL_STATE)

//! Example of slice of redux-toolkit 
// export const userSlice = createSlice({
// 	name: 'user',
// 	initialState: INITIAL_STATE,
// 	reducers: {
// 		setCurrentUser: (state, action) => {
// 			state.currentUser = action.payload
// 		},
// 	},
// })

// export const { setCurrentUser } = userSlice.action

// export const userReducerTK = userSlice.reducer
