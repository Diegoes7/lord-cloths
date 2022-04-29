import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.utils";
import {
	signInSuccess,
	signOutSuccess,
	signOutFailed,
	signInFailed,
	signUpFailed,
} from "./user.action";

export type UserState = {
	readonly currentUser: UserData | null;
	readonly isLoading: boolean;
	readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
	currentUser: null,
	isLoading: false,
	error: null,
};

// just a function that return new object
export const userReducer = (
	state = INITIAL_STATE,
	action: AnyAction
): UserState => {
	if (signInSuccess.match(action))
		return { ...state, currentUser: action.payload };

	if (signOutSuccess.match(action)) return { ...state, currentUser: null };

	if (
		signInFailed.match(action) ||
		signOutFailed.match(action) ||
		signUpFailed.match(action)
	)
		return { ...state, error: action.payload };

	return state;
};
