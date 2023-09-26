import { Middleware } from "redux";

import { RootState } from "../store";

export const loggerMiddleware: Middleware<{}, RootState> =
	(store) => (next) => (action) => {
		if (!action.type) return next(action);

		console.log("type: ", action.type);
		console.log("payload: ", action.payload);
		console.log("currentState: ", store.getState());

		next(action);

		// after next get called we see new state
		console.log("next state: ", store.getState());
	};


	// const thunkMiddleware = (store) =>(next) => (action) => {
	// 	if(typeof action  === 'function') {
	// 		action(dispatch)
	// 	}
	// } 
	// async behavior has data, isLoading, error