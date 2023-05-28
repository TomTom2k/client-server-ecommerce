import { combineReducers } from 'redux';

import brand from './brand';
import category from './category';
import product from './product';

export default combineReducers({
	brand,
	category,
	product,
});
