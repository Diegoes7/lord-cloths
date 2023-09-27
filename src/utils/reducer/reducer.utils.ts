import { AnyAction } from 'redux'

//* Matchable is type that we implement yourself, extend diff createAction ()
//* with ability to match receiving actions by the type, that is associated to
//* add additional props to function

//? Action Creator needs to fit this shape
type Matchable<AC extends () => AnyAction> = AC & {
	type: ReturnType<AC>['type']
	match(action: AnyAction): action is ReturnType<AC>
}

//? withOUT parameters, type overloaded to Matchable
export function withMatcher<AC extends () => AnyAction & { type: string }>(
	actionCreator: AC
): Matchable<AC>

//? with parameters, type overloaded to Matchable
export function withMatcher<
	AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>

//$ actual function
export function withMatcher(actionCreator: Function) {
	const type = actionCreator().type
	return Object.assign(actionCreator, {
		type,
		match(action: AnyAction) {
			return action.type === type
		},
	})
}

//? Types of all triggered actions
export type ActionWithPayload<T, P> = {
	type: T
	payload: P
}

export type Action<T> = {
	type: T
}

//! three function that are overloaded
//! pass type of action and some data
export function createAction<T extends string, P>(
	type: T,
	payload: P
): ActionWithPayload<T, P>

//! pass only type of action
export function createAction<T extends string, P>(
	type: P,
	payload: void
): Action<T>

//! actually return the result from the specific action  
export function createAction<T extends string, P>(type: T, payload: P) {
	return { type, payload }
}
