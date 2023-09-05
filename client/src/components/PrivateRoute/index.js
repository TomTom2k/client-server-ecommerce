import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthToken } from '~/AuthToken';

import configs from '~/configs';
const PrivateRoute = ({ roles }) => {
	const { role } = useContext(AuthToken);

	if (!role) {
		// If the user is not logged in, redirect to login
		return <Navigate to={configs.routes.login} />;
	}

	if (roles && !roles.includes(role)) {
		// If the user doesn't have the required role, redirect to 403 or a similar page
		return <Navigate to="/403" />;
	}

	// If the user is authorized, render the child routes
	return <Outlet />;
};

export default PrivateRoute;
