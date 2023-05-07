import { AdminLayout } from '../layouts';
import configs from '../configs';

import Home from '../pages/Home';
import List from '../pages/List';
import Admin from '../pages/Admin';
import ManageBrands from '../pages/Admin/ManageBrands';
import ManageCategory from '../pages/Admin/ManageCategory';
import ManageProducts from '../pages/Admin/ManageProducts';
import ManageAccounts from '../pages/Admin/ManageAccounts';

const publicRoutes = [
	{ path: configs.routes.home, component: Home },
	{ path: configs.routes.list, component: List },
	{
		path: configs.routes.admin,
		component: Admin,
		layout: AdminLayout,
	},
	{
		path: configs.routes.manageBrands,
		component: ManageBrands,
		layout: AdminLayout,
	},
	{
		path: configs.routes.manageCategory,
		component: ManageCategory,
		layout: AdminLayout,
	},
	{
		path: configs.routes.manageProducts,
		component: ManageProducts,
		layout: AdminLayout,
	},
	{
		path: configs.routes.manageAccounts,
		component: ManageAccounts,
		layout: AdminLayout,
	},
];

export { publicRoutes };
