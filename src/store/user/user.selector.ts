import { createSelector } from 'reselect'
import { RootState } from '../store'
import { UserState } from './user.slice'

//! get slice of the state
const selectUserReducer = (state: RootState): UserState => state.user

//! memoized the part of sliced state, update when changed
export const selectCurrentUser = createSelector(
	[selectUserReducer],
	(user) => user.currentUser
)
