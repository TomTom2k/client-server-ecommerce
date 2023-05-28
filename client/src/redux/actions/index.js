export const getType = (reduxAction) => {
	if (typeof reduxAction !== 'function') {
		throw new Error('Expected a function, got ' + typeof reduxAction);
	}
	return reduxAction().type;
};

export * as brandActions from './brand';
export * as categoryActions from './category';
export * as productActions from './product';
