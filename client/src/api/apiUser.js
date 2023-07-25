import axios from 'axios';

const URL = 'http://localhost:5000';

export const login = (payload) => axios.post(`${URL}/user/sign-in`, payload);
export const register = (payload) => axios.post(`${URL}/user/sign-up`, payload);
