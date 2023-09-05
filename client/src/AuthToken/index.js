import React, { createContext, useEffect, useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import authApi from '~/api/authApi';

export let AuthToken = createContext();

const AuthProvide = ({ children }) => {
	let [userInfo, setUserInfo] = useState({ user: null, role: null });

	const login = async (data) => {
		try {
			const res = await authApi.login(data);
			if (res?.headers.authorization) {
				Cookies.set('authorization', res.headers.authorization);
			}
			const user = await authApi.secret();
			if (user) {
				setUserInfo({ user, role: user.role });
			}
			return user;
		} catch (error) {
			throw error;
		}
	};
	let secret = async () => {
		const res = await authApi.secret();
		if (res.user) {
			setUserInfo({ user: res.user, role: res.user.role });
		}
	};

	useEffect(() => {
		const fetchInfoUser = async () => {
			const token = Cookies.get('authorization');
			if (token) {
				await secret();
			}
		};
		fetchInfoUser();
	}, []);

	let authData = {
		...userInfo,

		login,
		secret,
	};
	return <AuthToken.Provider value={authData}>{children}</AuthToken.Provider>;
};

export default AuthProvide;
