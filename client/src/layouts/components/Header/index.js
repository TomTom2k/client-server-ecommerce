import React from 'react';
import classNames from 'classnames/bind';

import { BsCart3 } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';

import Search from '../Search';
import Menu from './Menu';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import Logo from '~/components/Logo';
import configs from '~/configs';

const cx = classNames.bind(styles);

const Header = () => {
	const role = null;
	return (
		<header className={cx('wrapper')}>
			<div className={cx('top-header')}>
				<div className={cx('inner')}>
					<Logo />
					<Search />
					{!!role ? (
						<div className={cx('action')}>
							<Button
								leftIcon={<BsCart3 />}
								text
								to={configs.routes.cart}
							>
								Giỏ hàng
							</Button>
							<Button leftIcon={<BiUser />} text>
								Nguyễn Thành Tín
							</Button>
						</div>
					) : (
						<div className={cx('action')}>
							<Button outline>Đăng ký</Button>
							<Button primary>Đăng nhập</Button>
						</div>
					)}
				</div>
			</div>
			<div className={cx('bot-header')}>
				<div className={cx('inner')}>
					<Menu />
				</div>
			</div>
		</header>
	);
};

export default Header;
