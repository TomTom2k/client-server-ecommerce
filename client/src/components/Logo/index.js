import React from 'react';
import classNames from 'classnames/bind';

import { FaOpencart } from 'react-icons/fa';

import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
import configs from '~/configs';

const cx = classNames.bind(styles);

const Logo = () => {
	return (
		<div className={cx('wrapper')}>
			<Link to={configs.routes.home}>
				<FaOpencart />
				<h1>ShopMall</h1>
			</Link>
		</div>
	);
};

export default Logo;
