import { call, put } from 'redux-saga/effects';

import { apiBrand } from '../../api';
import { brandActions } from '../actions';

export function* fetchBrandsSaga(action) {
	try {
		const brands = yield call(apiBrand.getBrands);
		yield put(brandActions.getBrands.getBrandsSuccess(brands.data));
	} catch (err) {
		console.err(err);
		yield put(brandActions.getBrands.getBrandsFailure(err));
	}
}
