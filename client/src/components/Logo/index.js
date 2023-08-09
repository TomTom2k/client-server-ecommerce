import React from 'react';
import classNames from 'classnames/bind';

import { FaOpencart } from 'react-icons/fa';

import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
import configs from '~/configs';

const cx = classNames.bind(styles);

const Logo = () => {
	return (
		<Link to={configs.routes.home} className={cx('wrapper')}>
			<FaOpencart />
			<h1>ShopMall</h1>
		</Link>
	);
};

export default Logo;
