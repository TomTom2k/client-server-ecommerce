import axiosClient from './axiosClient';

const authApi = {
	login: (data) => {
		const url = '/user/sign-in';
		return axiosClient.post(url, data);
	},
	register: (data) => {
		const url = '/user/sign-in';
		return axiosClient.post(url, data);
	},
	secret: () => {
		const url = '/user/secret';
		return axiosClient.get(url);
	},
};

export default authApi;
