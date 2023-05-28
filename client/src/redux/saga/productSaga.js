import { call, put } from 'redux-saga/effects';

import { productActions } from '../actions';
import { apiProduct } from '../../api';

export function* fetchProductsSaga(action) {
	try {
		const products = yield call(apiProduct.getProducts);
		yield put(productActions.getProducts.getProductsSuccess(products.data));
	} catch (error) {
		yield put(productActions.getProducts.getProductsFailure(error));
	}
}

export function* fetchProductsSubmitSaga(action) {
	try {
		const products = yield call(apiProduct.getProductsSubmit);
		yield put(
			productActions.getProductsSubmit.getProductsSubmitSuccess(
				products.data
			)
		);
	} catch (error) {
		yield put(
			productActions.getProductsSubmit.getProductsSubmitFailure(error)
		);
	}
}

export function* updateStatusSaga(action) {
	try {
		const id = action.payload.id;
		const data = action.payload.data;
		yield call(apiProduct.updateStatus, id, data);
		yield put(
			productActions.updateStatus.updateStatusSuccess(action.payload)
		);
	} catch (error) {
		console.log(error);
		yield put(productActions.updateStatus.updateStatusFailure(error));
	}
}
