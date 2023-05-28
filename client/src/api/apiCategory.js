import axios from 'axios';

const URL = 'http://localhost:5000';

export const getCategories = () => axios.get(`${URL}/category`);
export const postCategory = (payload) => axios.post(`${URL}/category`, payload);
export const deleteCategory = (payload) =>
	axios.delete(`${URL}/category/${payload}`);
