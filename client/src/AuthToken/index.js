import React, { createContext, useState } from 'react';
import Cookies from 'js-cookie';
import * as authService from '~/services/authService';

export let AuthToken = createContext();

const AuthProvide = ({ children }) => {
	let [user, setUser] = useState(null);
	let [role, setRole] = useState(null);

	let login = async (data) => {
		let res = await authService.login(data);
		console.log(res);
		if (res?.headers) {
			if (res.headers.authorization) {
				Cookies.set('authorization', res.headers.authorization);
				Cookies.set('authorization');
			}
		}

		let user = await authService.secret();
		console.log(user);
	};
	let authData = {
		user,
		role,

		login,
	};
	return <AuthToken.Provider value={authData}>{children}</AuthToken.Provider>;
};

export default AuthProvide;
