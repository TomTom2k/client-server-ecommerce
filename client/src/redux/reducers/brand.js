import { INIT_STATE } from '../../constant';
import { getType, brandActions } from '../actions';

const brand = (state = INIT_STATE.brand, action) => {
	switch (action.type) {
		case getType(brandActions.getBrands.getBrandsRequest): {
			return {
				...state,
				isLoading: true,
			};
		}
		case getType(brandActions.getBrands.getBrandsSuccess): {
			return {
				...state,
				isLoading: false,
				data: action.payload,
			};
		}
		case getType(brandActions.getBrands.getBrandsFailure): {
			return {
				...state,
				isLoading: false,
			};
		}
		case getType(brandActions.createBrand.createBrandRequest): {
			return {
				...state,
				isLoading: true,
			};
		}
		case getType(brandActions.createBrand.createBrandSuccess): {
			const updateData = [...state.data, action.payload];
			return {
				...state,
				isLoading: false,
				data: updateData,
			};
		}
		case getType(brandActions.createBrand.createBrandFailure): {
			return {
				...state,
				isLoading: false,
			};
		}
		case getType(brandActions.deleteBrand.deleteBrandRequest): {
			return {
				...state,
				isLoading: true,
			};
		}
		case getType(brandActions.deleteBrand.deleteBrandSuccess): {
			const updateData = state.data.filter(
				(brand) => brand._id !== action.payload
			);
			return {
				...state,
				isLoading: false,
				data: updateData,
			};
		}
		case getType(brandActions.deleteBrand.deleteBrandFailure): {
			return {
				...state,
				isLoading: false,
			};
		}
		default:
			return state;
	}
};

export default brand;
