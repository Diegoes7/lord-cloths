import { AnyAction } from "redux";

//* Matchable is type that we implement yourself, extend diff createAction ()
//* with ability to match receiving actions by the type, that i associated to
// add additional props to function

type Matchable<AC extends () => AnyAction> = AC & {
	type: ReturnType<AC>["type"];
	match(action: AnyAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => AnyAction & { type: string }>(
	actionCreator: AC
): Matchable<AC>;

export function withMatcher<
	AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
	const type = actionCreator().type;
	return Object.assign(actionCreator, {
		type,
		match(action: AnyAction) {
			return action.type === type;
		},
	});
}

export type ActionWithPayload<T, P> = {
	type: T;
	payload: P;
};

export type Action<T> = {
	type: T;
};

export function createAction<T extends string, P>(
	type: T,
	payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string, P>(
	type: P,
	payload: void
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
	return { type, payload };
}
