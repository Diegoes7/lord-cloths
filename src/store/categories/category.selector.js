import { createSelector } from "reselect";

//* inintal selector give us back, a slice of reducer that we need
const selectCategoryReducer = (state) => state.categories;

//* this is memoized selector, its trun only selectCategoryReducer is changed
export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.categories
);

// if don't have change don't bother re-running
//* give back previously calculated value
export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories) =>
		categories.reduce((acc, category) => {
			const { title, items } = category;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {})
);
