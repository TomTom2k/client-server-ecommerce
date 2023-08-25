import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { FaFacebook, FaTiktok } from 'react-icons/fa';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';

import styles from './AuthLayout.module.scss';
import images from '~/asset/images';

const cx = classNames.bind(styles);

const AuthLayout = ({ children }) => {
	return (
		<div className={cx('wrapper')}>
			<img
				src={images.backgroundAuthLayout}
				alt=""
				className={cx('background')}
			/>
			<div className={cx('container')}>
				<img
					src={images.backgroundAuthLayout}
					alt=""
					className={cx('background-content')}
				/>
				<div className={cx('inner')}>
					<div className={cx('left-content')}>
						<div className={cx('title')}>WELCOME</div>
						<div className={cx('sub-title')}>
							Chào mừng bạn đến với ShopMall, nơi cung cấp mỹ phẩm
							và đồ dùng skincare chất lượng từ các thương hiệu
							danh tiếng. Mua sắm dễ dàng và chăm sóc làn da
							chuyên nghiệp chỉ có tại ShopMall!
						</div>
						<div className={cx('medias')}>
							<a href="#">
								<FaFacebook />
							</a>
							<a href="#">
								<AiFillInstagram />
							</a>
							<a href="#">
								<AiFillTwitterCircle />
							</a>
							<a href="#">
								<FaTiktok />
							</a>
						</div>
					</div>
					<div className={cx('right-content')}>{children}</div>
				</div>
			</div>
		</div>
	);
};

AuthLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthLayout;
