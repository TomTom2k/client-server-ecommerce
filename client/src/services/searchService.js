import * as request from '../utils/request';

export const search = async (keyword, minPrice, maxPrice, category, brand) => {
	try {
		const res = await request.get('product/search', {
			params: {
				keyword,
				minPrice,
				maxPrice,
				category,
				brand,
			},
		});
		return res.data.products;
	} catch (error) {
		console.log(error);
	}
};
