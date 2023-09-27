import { createSelector } from 'reselect'
import { RootState } from '../store'
import { CategoriesState } from './category.reducer'
import { CategoryMap } from './category.types'

//! initial selector give us back, a slice of redux store that we need
//$ it's input selector
const selectCategoryReducer = (state: RootState): CategoriesState =>
	state.categories

//! this is memoized selector, its return only selectCategoryReducer is changed
export const selectCategories = createSelector(
	[selectCategoryReducer], //! Input selector
	(categoriesSlice) => categoriesSlice.categories //! Output selector
)

//$ if don't have change don't bother re-running
//! give back previously calculated value, memoized value
export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories): CategoryMap =>
		categories.reduce((acc, category) => {
			const { title, items } = category
			acc[title.toLowerCase()] = items
			return acc
		}, {} as CategoryMap)
)

export const selectIsLoading = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.isLoading
)
