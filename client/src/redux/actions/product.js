import { createActions } from 'redux-actions';

export const getProducts = createActions({
	getProductsRequest: undefined,
	getProductsSuccess: (payload) => payload,
	getProductsFailure: (err) => err,
});

export const getProductsSubmit = createActions({
	getProductsSubmitRequest: undefined,
	getProductsSubmitSuccess: (payload) => payload,
	getProductsSubmitFailure: (err) => err,
});

export const getProductDetail = createActions({
	getProductDetailRequest: undefined,
	getProductDetailSuccess: (payload) => payload,
	getProductDetailFailure: (payload) => payload,
});

export const createProduct = createActions({
	createProductRequest: (payload) => payload,
	createProductSuccess: (payload) => payload,
	createProductFailure: (err) => err,
});

export const updateStatus = createActions({
	updateStatusRequest: (payload) => payload,
	updateStatusSuccess: (payload) => payload,
	updateStatusFailure: (payload) => payload,
});

export const deleteProduct = createActions({
	deleteProductRequest: (payload) => payload,
	deleteProductSuccess: (payload) => payload,
	deleteProductFailure: (err) => err,
});
