import { takeLatest, all, call, put } from 'typed-redux-saga/macro'
import { User } from 'firebase/auth'
import {
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
} from './user.slice'

import {
	getCurrentUser,
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
	createAuthUserWithEmailAndPassword,
	signOutUser,
	AdditionalInfo,
} from '../../utils/firebase/firebase.utils'


export function* getSnapshotFromUserAuth(
	userAuth: User,
	additionalDetails?: AdditionalInfo
) {
	try {
		const userSnapshot = yield* call(
			createUserDocumentFromAuth,
			userAuth,
			additionalDetails
		)

		if (userSnapshot) {
			yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
		}
	} catch (error) {
		yield* put(signInFailed(error as Error))
	}
}

export type EmailSignInStart = {
	payload: { email: string; password: string }
}

export function* signInWithEmail({
	payload: { email, password },
}: EmailSignInStart) {
	try {
		const userCredential = yield* call(
			signInAuthUserWithEmailAndPassword,
			email,
			password
		)
		if (userCredential) {
			const { user } = userCredential
			yield* call(getSnapshotFromUserAuth, user)
		}
	} catch (error) {
		yield* put(signInFailed(error as Error))
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield* call(signInWithGooglePopup)
		yield* call(getSnapshotFromUserAuth, user)
	} catch (error) {
		yield* put(signInFailed(error as Error))
	}
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield* call(getCurrentUser)
		if (!userAuth) return
		yield* call(getSnapshotFromUserAuth, userAuth)
	} catch (error) {
		yield* put(signInFailed(error as Error))
	}
}

export type SignUpStart = {
	payload: {
		email: string
		password: string
		displayName: string
	}
}

export function* signUp({
	payload: { email, password, displayName },
}: SignUpStart) {
	try {
		const userCredential = yield* call(
			createAuthUserWithEmailAndPassword,
			email,
			password
		)
		if (userCredential) {
			const { user } = userCredential
			yield* put(signUpSuccess({ user, additionalDetails: { displayName } }))
		}
	} catch (error) {
		yield* put(signUpFailed(error as Error))
	}
}

export function* signOut() {
	try {
		yield* call(signOutUser)
		yield* put(signOutSuccess())
	} catch (error) {
		yield* put(signOutFailed(error as Error))
	}
}

export type SignUpSuccess = {
	user: User
	additionalDetails: AdditionalInfo
}

export function* signInAfterSignUp(action: ReturnType<typeof signUpSuccess>) {
	const { user, additionalDetails } = action.payload
	yield* call(getSnapshotFromUserAuth, user, additionalDetails)
}

//! Entry points to saga flow, start the circle saga
export function* onCheckUserSessionSaga() {
	yield* takeLatest(checkUserSession.type, isUserAuthenticated)
}

export function* onGoogleSignInStart() {
	yield* takeLatest(googleSignInStart.type, signInWithGoogle)
}

export function* onEmailSignInStart() {
	yield takeLatest<ReturnType<typeof emailSignInStart>>(
		emailSignInStart.type,
		signInWithEmail
	)
}

export function* onSignUpStart() {
	yield* takeLatest<ReturnType<typeof signUpStart>>(signUpStart.type, signUp)
}

export function* onSignUpSuccess() {
	yield* takeLatest<ReturnType<typeof signUpSuccess>>(
		signUpSuccess.type,
		signInAfterSignUp
	)
}

export function* onSignOutStart() {
	yield* takeLatest(signOutStart.type, signOut)
}

//i Pass the all User_Sagas in the Root_Saga
export function* userSagas() {
	yield* all([
		call(onCheckUserSessionSaga),
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onSignUpStart),
		call(onSignUpSuccess),
		call(onSignOutStart),
	])
}
