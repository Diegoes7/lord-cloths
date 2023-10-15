import { takeLatest, all, call, put } from 'typed-redux-saga/macro'
import { getCollectionAndDocuments } from '../../utils/firebase/firebase.utils'
import {
	fetchCategoriesFailed,
	fetchCategoriesStart,
	fetchCategoriesSuccess,
} from './category.slice'

export function* fetchCategoriesAsync() {
	try {
		const categoriesArray = yield* call(getCollectionAndDocuments)
		yield* put(fetchCategoriesSuccess(categoriesArray))
	} catch (error) {
		yield* put(fetchCategoriesFailed(error as Error))
	}
}

export function* onFetchCategories() {
	yield* takeLatest(fetchCategoriesStart, fetchCategoriesAsync)
}

//! accumulator that hold all your sagas related to the category
export function* categoriesSaga() {
	yield* all([call(onFetchCategories)])
}

//$ all - effect, say run anything inside, and only complete when all is done, take []
//$ have a function and want to turn it on effect wrap it in call method
//$ put instead of dispatch
