const { default: axiosClient } = require("./axiosClient");

const productApi = {
	searchProduct: (params) => {
		const url = '/product/search';
        return axiosClient.get(url, params)
	},
};

export default productApi