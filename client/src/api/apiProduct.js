import axios from 'axios';

const URL = 'http://localhost:5000';

export const getProducts = () => axios.get(`${URL}/product`);
export const getProductsSubmit = () => axios.get(`${URL}/product/list-submit`);
export const updateStatus = (id, payload) =>
	axios.patch(`${URL}/product/${id}`, payload);
