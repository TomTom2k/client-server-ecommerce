import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { GoogleLogin } from 'react-google-login';

import { AiFillLock, AiFillMail } from 'react-icons/ai';

import styles from './Login.module.scss';
import Button from '~/components/Button';
import images from '~/asset/images';
import { AuthToken } from '~/AuthToken';

const cx = classNames.bind(styles);

const Login = () => {
	const { login } = useContext(AuthToken);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		try {
			login(data);
		} catch (error) {
			console.error(error);
		}
	};

	const responseGoogle = (response) => {
		// console.log(response);
		// if (response.error) {
		// 	console.error('Google Login Error:', response.error);
		// } else {
		// 	console.log(response.tokenId);
		// }
		// if (response.tokenId) {
		// 	fetch('YOUR_BACKEND_ENDPOINT', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify({ token: response.tokenId }),
		// 	});
		// } else {
		// 	console.error('Google login failed:', response.error);
		// }
	};

	return (
		<div className={cx('wrapper')}>
			<div className={cx('title')}>Đăng nhập</div>
			<form onSubmit={handleSubmit(onSubmit)} className={cx('form')}>
				<div className={cx('input-group')}>
					<label htmlFor="email">Email:</label>
					<input
						id="email"
						placeholder="Nhập email"
						{...register('email', { required: true })}
					/>
					<AiFillMail />
					{errors?.email && (
						<span aria-live="polite">
							Không được bỏ trống email
						</span>
					)}
				</div>

				<div className={cx('input-group')}>
					<label htmlFor="password">Mật khẩu:</label>
					<input
						id="password"
						type="password"
						placeholder="Nhập mật khẩu"
						{...register('password', { required: true })}
					/>
					<AiFillLock />
					{errors?.password && (
						<span aria-live="polite">
							Không được bỏ trống mật khẩu
						</span>
					)}
				</div>

				<Button primary className={cx('submit-button')}>
					Đăng nhập
				</Button>

				<span>hoặc</span>
				<div className={cx('another')}>
					<GoogleLogin
						clientId={process.env.REACT_APP_CLIENT_ID}
						buttonText="Login with Google"
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
					/>
					<img
						src={images.facebookLogo}
						alt="Đăng nhập bằng Facebook"
					/>
				</div>
			</form>
		</div>
	);
};

export default Login;
