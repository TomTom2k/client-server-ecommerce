import configs from '~/configs';
import { AuthLayout } from '~/layouts';
import Cart from '~/pages/Cart';

import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import Introduce from '~/pages/Introduce';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Shop from '~/pages/Shop';

const publicRoutes = [
	{
		path: configs.routes.contact,
		component: Contact,
	},
	{
		path: configs.routes.home,
		component: Home,
	},
	{
		path: configs.routes.shop,
		component: Shop,
	},
	{
		path: configs.routes.introduce,
		component: Introduce,
	},
	{
		path: configs.routes.login,
		component: Login,
		layout: AuthLayout,
	},
	{
		path: configs.routes.register,
		component: Register,
		layout: AuthLayout,
	},
];

const privateRoutes = [
	{
		path: configs.routes.cart,
		component: Cart,
		layout: null,
		role: [configs.role.user, configs.role.staff, configs.role.admin],
	},
	{
		path: configs.routes.profile,
		component: Register,
		layout: null,
		role: [configs.role.user, configs.role.staff, configs.role.admin],
	},
	{
		path: configs.routes.order,
		component: Register,
		layout: null,
		role: [configs.role.user, configs.role.staff, configs.role.admin],
	},
];

export { publicRoutes, privateRoutes };
