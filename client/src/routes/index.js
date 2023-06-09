import { AdminLayout } from '../layouts';
import configs from '../configs';

import Home from '../pages/Home';
import List from '../pages/List';
import ProductDetail from '../pages/ProductDetail';
import Contact from '../pages/Contact';
import Intro from '../pages/Intro';
import Account from '../pages/Account';
import Profile from '../pages/Profile';
import Cart from '../pages/Cart';
import Admin from '../pages/Admin';
import ManageBrands from '../pages/Admin/ManageBrands';
import ManageCategory from '../pages/Admin/ManageCategory';
import ManageProducts from '../pages/Admin/ManageProducts';
import ManageAccounts from '../pages/Admin/ManageAccounts';

const publicRoutes = [
	{ path: configs.routes.home, component: Home },
	{ path: configs.routes.list, component: List },
	{ path: configs.routes.productDetail + ':id', component: ProductDetail },
	{ path: configs.routes.contact, component: Contact },
	{ path: configs.routes.intro, component: Intro },
	{ path: configs.routes.account, component: Account, layout: null },
	{ path: configs.routes.profile, component: Profile },
	{ path: configs.routes.cart, component: Cart },
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
