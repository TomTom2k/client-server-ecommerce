import { put } from 'redux-saga/effects';
import { userActions } from '../actions';

export function* fetchUserSaga(action) {
	try {
		// const user = yield call;
	} catch (error) {
		yield put(userActions.createUser.createUserFailure(error));
	}
}
