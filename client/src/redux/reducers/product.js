import { INIT_STATE } from '../../constant';
import { getType, productActions } from '../actions';

const product = (state = INIT_STATE.product, action) => {
	switch (action.type) {
		case getType(productActions.getProducts.getProductsRequest): {
			return {
				...state,
				isLoading: true,
			};
		}
		case getType(productActions.getProducts.getProductsSuccess): {
			return {
				...state,
				isLoading: false,
				products: action.payload,
			};
		}
		case getType(productActions.getProducts.getProductsFailure): {
			return {
				...state,
				isLoading: false,
			};
		}

		case getType(productActions.updateStatus.updateStatusRequest): {
			return {
				...state,
				isLoading: true,
			};
		}
		case getType(productActions.updateStatus.updateStatusSuccess): {
			const newProducts = state.products.map((product) => {
				if (product._id === action.payload.id) {
					return { ...product, ...action.payload.data };
				}

				return product;
			});
			const newProductsSubmit = newProducts?.filter(
				(product) => product.status === 'ACCEPT'
			);

			return {
				...state,
				isLoading: false,
				products: newProducts,
				productsSubmit: newProductsSubmit,
			};
		}
		case getType(productActions.updateStatus.updateStatusFailure): {
			return {
				...state,
				isLoading: false,
			};
		}

		case getType(
			productActions.getProductsSubmit.getProductsSubmitRequest
		): {
			return {
				...state,
				isLoading: true,
			};
		}
		case getType(
			productActions.getProductsSubmit.getProductsSubmitSuccess
		): {
			return {
				...state,
				isLoading: false,
				productsSubmit: action.payload,
			};
		}
		case getType(
			productActions.getProductsSubmit.getProductsSubmitFailure
		): {
			return {
				...state,
				isLoading: false,
			};
		}

		default:
			return state;
	}
};

export default product;
