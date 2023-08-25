import Cookies from 'js-cookie';

import * as request from '~/utils/request';

export const secret = async () => {
	// Lấy token từ cookies
	const token = Cookies.get('authorize');

	if (!token) {
		console.error('No token found in cookies!');
		return;
	}
	try {
		// Thiết lập header Authorization và gửi yêu cầu
		const res = await request.get('user/secret', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const login = async (data) => {
	try {
		const res = await request.post('user/sign-in', data);
		return res;
	} catch (error) {
		console.log(error);
	}
};
