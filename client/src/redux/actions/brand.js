import { createActions } from 'redux-actions';

export const getBrands = createActions({
	getBrandsRequest: undefined,
	getBrandsSuccess: (payload) => payload,
	getBrandsFailure: (err) => err,
});

export const createBrand = createActions({
	createBrandRequest: (payload) => payload,
	createBrandSuccess: (payload) => payload,
	createBrandFailure: (err) => err,
});

export const deleteBrand = createActions({
	deleteBrandRequest: (brandId) => brandId,
	deleteBrandSuccess: (brandId) => brandId,
	deleteBrandFailure: (err) => err,
});
