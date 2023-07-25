import { combineReducers } from 'redux';

import brand from './brand';
import category from './category';
import product from './product';
import user from './user';

export default combineReducers({
	brand,
	category,
	product,
	user,
});
