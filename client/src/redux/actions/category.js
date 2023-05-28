import { createActions } from 'redux-actions';

export const getCategories = createActions({
	getCategoriesRequest: undefined,
	getCategoriesSuccess: (payload) => payload,
	getCategoriesFailure: (err) => err,
});

export const createCategory = createActions({
	createCategoryRequest: (payload) => payload,
	createCategorySuccess: (payload) => payload,
	createCategoryFailure: (err) => err,
});

export const deleteCategory = createActions({
	deleteCategoryRequest: (payload) => payload,
	deleteCategorySuccess: (payload) => payload,
	deleteCategoryFailure: (err) => err,
});
