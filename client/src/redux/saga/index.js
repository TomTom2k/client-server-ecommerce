import { takeLatest } from 'redux-saga/effects';
import { brandActions } from '../actions';
import * as brandSaga from './brandSaga';

function* mySaga() {
	yield takeLatest(
		brandActions.getBrands.getBrandsRequest,
		brandSaga.fetchBrandsSaga
	);
}

export default mySaga;
