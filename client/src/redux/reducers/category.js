import { INIT_STATE } from '../../constant';
import { getType, categoryActions } from '../actions';

const category = (state = INIT_STATE.category, action) => {
	switch (action.type) {
		case getType(categoryActions.getCategories.getCategoriesRequest): {
			return {
				...state,
				isLoading: true,
			};
		}
		case getType(categoryActions.getCategories.getCategoriesSuccess): {
			return {
				...state,
				isLoading: false,
				data: action.payload,
			};
		}
		case getType(categoryActions.getCategories.getCategoriesFailure): {
			return {
				...state,
				isLoading: false,
			};
		}

		case getType(categoryActions.createCategory.createCategoryRequest): {
			return {
				...state,
				isLoading: true,
			};
		}
		case getType(categoryActions.createCategory.createCategorySuccess): {
			const updateData = [...state.data, action.payload];

			return {
				...state,
				isLoading: false,
				data: updateData,
			};
		}
		case getType(categoryActions.createCategory.createCategoryFailure): {
			return {
				...state,
				isLoading: false,
			};
		}

		case getType(categoryActions.deleteCategory.deleteCategoryRequest): {
			return {
				...state,
				isLoading: true,
			};
		}
		case getType(categoryActions.deleteCategory.deleteCategorySuccess): {
			const updateData = state.data.filter(
				(category) => category._id !== action.payload
			);
			return {
				...state,
				isLoading: false,
				data: updateData,
			};
		}
		case getType(categoryActions.deleteCategory.deleteCategoryFailure): {
			return {
				...state,
				isLoading: false,
			};
		}
		default:
			return state;
	}
};

export default category;
