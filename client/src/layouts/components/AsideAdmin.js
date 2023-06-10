import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import styled from 'styled-components';

import configs from '../../configs';
function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
}

const items = [
	getItem('Quản lý sản phẩm', 'manageProduct', <ShopOutlined />, [
		getItem('Danh sách thương hiệu', configs.routes.manageBrands),
		getItem('Danh sách thể loại', configs.routes.manageCategory),
		getItem('Danh sách sản phẩm', configs.routes.manageProducts),
	]),
	getItem('Quản Lý tài khoản', 'manageAccount', <UserOutlined />, [
		getItem('Danh sách tài khoản', configs.routes.manageAccounts),
	]),
];

const MenuStyled = styled(Menu)`
	height: 100vh;
	width: var(--width-aside);
	overflow-y: auto;
	position: fixed;
`;

const AsideAdmin = () => {
	const navigate = useNavigate();
	const onClick = (e) => {
		navigate(e.key);
	};
	return (
		<MenuStyled
			onClick={onClick}
			defaultOpenKeys={['manageProduct', 'manageAccount']}
			mode="inline"
			theme="dark"
			items={items}
		/>
	);
};
export default AsideAdmin;
