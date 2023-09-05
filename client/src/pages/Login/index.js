import React, { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { GoogleLogin } from 'react-google-login';

import { AiFillLock, AiFillMail } from 'react-icons/ai';

import configs from '~/configs';
import images from '~/asset/images';
import { AuthToken } from '~/AuthToken';
import Button from '~/components/Button';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

const Login = () => {
	const navigate = useNavigate();
	const { login } = useContext(AuthToken);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [errorMessage, setErrorMessage] = useState('');

	const onSubmit = async (data) => {
		try {
			setErrorMessage('');
			const user = await login(data);
			if (!user) {
				setErrorMessage('Tài khoản hoặc mật khẩu không đúng');
			}
			navigate(configs.routes.home);
		} catch (error) {
			setErrorMessage('Tài khoản hoặc mật khẩu không đúng');
		}
	};

	const responseGoogle = (response) => {
		// console.log(response);
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
						autoComplete="email"
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
						autoComplete="current-password"
						{...register('password', { required: true })}
					/>
					<AiFillLock />
					{errors?.password && (
						<span aria-live="polite">
							Không được bỏ trống mật khẩu
						</span>
					)}
				</div>

				<div className={cx('button-group')}>
					<span className={cx('message-error')}>{errorMessage}</span>
					<Button primary className={cx('submit-button')}>
						Đăng nhập
					</Button>
				</div>

				<span className={cx('text')}>hoặc</span>
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
