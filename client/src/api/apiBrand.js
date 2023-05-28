import axios from 'axios';

const URL = 'http://localhost:5000';

export const getBrands = () => axios.get(`${URL}/brand`);
export const createBrand = (payload) => axios.post(`${URL}/brand`, payload);
export const updateBrand = (payload) =>
	axios.patch(`${URL}/brand/${payload}`, payload);
export const deleteBrand = (payload) =>
	axios.delete(`${URL}/brand/${payload}`, payload);
