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
		default:
			return state;
	}
};

export default brand;
