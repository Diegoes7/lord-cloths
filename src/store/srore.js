import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// little library helper run before action hit the reducer
const middleWares = [logger];

const composeEnhancers = compose(applyMiddleware(...middleWares));  

export const store = createStore(rootReducer, undefined, composeEnhancers);
