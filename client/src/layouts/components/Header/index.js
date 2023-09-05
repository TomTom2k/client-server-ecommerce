import React, { useContext, useEffect } from 'react';
import classNames from 'classnames/bind';

import { BsCart3 } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';

import configs from '~/configs';
import Menu from './Menu';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import Logo from '~/components/Logo';
import Search from '../Search';
import { AuthToken } from '~/AuthToken';

const cx = classNames.bind(styles);

const Header = () => {
	const { role } = useContext(AuthToken);
	// console.log(role);
	return (
		<header className={cx('wrapper')}>
			<div className={cx('top-header')}>
				<div className={cx('inner')}>
					<div>
						<Logo />
					</div>
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
							<Button
								leftIcon={<BiUser />}
								text
								to={configs.routes.profile}
							>
								Nguyễn Thành Tín
							</Button>
						</div>
					) : (
						<div className={cx('action')}>
							<Button outline to={configs.routes.register}>
								Đăng ký
							</Button>
							<Button primary to={configs.routes.login}>
								Đăng nhập
							</Button>
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
