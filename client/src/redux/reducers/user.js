import { INIT_STATE } from '../../constant';
import { userActions, getType } from '../actions';

const user = (state = INIT_STATE.user, action) => {
	switch (action.getType) {
		case getType(userActions.createUser.createUserRequest): {
			return {
				...state,
				isLoading: true,
			};
		}
		case getType(userActions.createUser.createUserSuccess): {
			return {
				...state,
				isLoading: false,
				data: action.payload,
			};
		}
		case getType(userActions.createUser.createUserFailure): {
			return {
				...state,
				isLoading: false,
			};
		}
		default:
			return state;
	}
};

export default user;
