import { createActions } from 'redux-actions';

export const getUser = createActions({
	getUserRequest: undefined,
	getUserSuccess: (payload) => payload,
	getUserFailure: (err) => err,
});

export const createUser = createActions({
	createUserRequest: undefined,
	createUserSuccess: (payload) => payload,
	createUserFailure: (err) => err,
});
