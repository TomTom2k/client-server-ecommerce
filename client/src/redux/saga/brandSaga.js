import { call, put } from 'redux-saga/effects';

import { apiBrand } from '../../api';
import { brandActions } from '../actions';

export function* fetchBrandsSaga(action) {
	try {
		const brands = yield call(apiBrand.getBrands);
		yield put(brandActions.getBrands.getBrandsSuccess(brands.data));
	} catch (err) {
		yield put(brandActions.getBrands.getBrandsFailure(err));
	}
}

export function* createBrandSaga(action) {
	try {
		const brand = action.payload;
		const newBrand = yield call(apiBrand.createBrand, brand);
		yield put(
			brandActions.createBrand.createBrandSuccess(newBrand.data.brand)
		);
	} catch (err) {
		yield put(brandActions.createBrand.createBrandFailure(err));
	}
}

export function* deleteBrandSaga(action) {
	try {
		const brandId = action.payload;
		yield call(apiBrand.deleteBrand, brandId);
		yield put(brandActions.deleteBrand.deleteBrandSuccess(brandId));
	} catch (err) {
		yield put(brandActions.deleteBrand.deleteBrandFailure(err));
	}
}
