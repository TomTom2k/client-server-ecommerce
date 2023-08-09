import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import configs from '~/configs';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const navItems = [
	{
		label: 'Trang chủ',
		to: configs.routes.home,
	},
	{
		label: 'Cửa hàng',
		to: configs.routes.shop,
	},
	{
		label: 'Liên hệ',
		to: configs.routes.contact,
	},
	{
		label: 'Giới thiệu',
		to: configs.routes.introduce,
	},
];

const Menu = () => {
	return (
		<nav className={cx('menu')}>
			<ul>
				{navItems.map((item, index) => (
					<li key={index}>
						<Link to={item.to}>{item.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Menu;
