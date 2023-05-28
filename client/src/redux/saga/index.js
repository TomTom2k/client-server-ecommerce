import { takeLatest } from 'redux-saga/effects';
import { brandActions, categoryActions, productActions } from '../actions';

import * as brandSaga from './brandSaga';
import * as categorySaga from './categorySaga';
import * as productSaga from './productSaga';

function* mySaga() {
	// brandSaga
	yield takeLatest(
		brandActions.createBrand.createBrandRequest,
		brandSaga.createBrandSaga
	);
	yield takeLatest(
		brandActions.deleteBrand.deleteBrandRequest,
		brandSaga.deleteBrandSaga
	);
	yield takeLatest(
		brandActions.getBrands.getBrandsRequest,
		brandSaga.fetchBrandsSaga
	);

	// categorySaga
	yield takeLatest(
		categoryActions.getCategories.getCategoriesRequest,
		categorySaga.fetchCategoriesSaga
	);
	yield takeLatest(
		categoryActions.createCategory.createCategoryRequest,
		categorySaga.createCategorySaga
	);
	yield takeLatest(
		categoryActions.deleteCategory.deleteCategoryRequest,
		categorySaga.deleteCategorySaga
	);

	// product
	yield takeLatest(
		productActions.getProducts.getProductsRequest,
		productSaga.fetchProductsSaga
	);
	yield takeLatest(
		productActions.getProductsSubmit.getProductsSubmitRequest,
		productSaga.fetchProductsSubmitSaga
	);
	yield takeLatest(
		productActions.updateStatus.updateStatusRequest,
		productSaga.updateStatusSaga
	);
}

export default mySaga;
