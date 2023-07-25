import { call, put } from 'redux-saga/effects';
import { categoryActions } from '../actions';
import { apiCategory } from '../../api';

export function* fetchCategoriesSaga(action) {
	try {
		const categories = yield call(apiCategory.getCategories);
		yield put(
			categoryActions.getCategories.getCategoriesSuccess(categories.data)
		);
	} catch (err) {
		yield put(categoryActions.getCategories.getCategoriesFailure(err));
	}
}

export function* createCategorySaga(action) {
	try {
		const category = action.payload;
		const newCategory = yield call(apiCategory.postCategory, category);
		yield put(
			categoryActions.createCategory.createCategorySuccess(
				newCategory.data
			)
		);
	} catch (error) {
		yield put(categoryActions.createCategory.createCategoryFailure(error));
	}
}

export function* deleteCategorySaga(action) {
	try {
		const categoryId = action.payload;
		yield call(apiCategory.deleteCategory, categoryId);
		yield put(
			categoryActions.deleteCategory.deleteCategorySuccess(categoryId)
		);
	} catch (error) {
		yield put(categoryActions.deleteCategory.deleteCategoryFailure(error));
	}
}
