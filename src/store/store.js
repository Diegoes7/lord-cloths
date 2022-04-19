import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
	if (!action.type) return next(action);

	console.log("type: ", action.type);
	console.log("payload: ", action.payload);
	console.log("currentState: ", store.getState());

	next(action);

	// after next got called we see new state
	console.log("next state: ", store.getState());
};

const persistConfig = {
	key: "root",
	storage,
	blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// little library helper run before action hit the reducer
const middleWares = [loggerMiddleware];

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);
