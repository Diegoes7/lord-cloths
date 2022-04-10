import { createContext, useState, useEffect } from "react";
import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// the actual value you want to access
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

// actual component
export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) createUserDocumentFromAuth(user);
			console.log(user);
			setCurrentUser(user);
		});

		// unsubsccribe whenever unmount
		return unsubscribe;
	}, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Stream Listner -
//* next:(nextVal) => {//do smt with val}
//* error:(error) => {// do smt with err}
//* complete: () => {// do smt when finishing}
//! subscribe means start listening to what happened in the stream
