import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import images from '../assets/images';
import Button from '../components/Button';

const BackgroundStyled = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: 0;
`;
const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 24rem;
	min-height: 20rem;
	border-radius: 2rem;
	padding: 2rem;

	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	border: 1px solid rgba(255, 255, 255, 0.18);

	z-index: 1;
`;
const GroupInputStyled = styled.div`
	width: 100%;
	position: relative;

	margin-bottom: 2rem;
`;
const InputStyled = styled.input`
	width: 100%;
	border: 1px solid transparent;
	padding: 0.5rem 1rem;
	border-radius: 0.25rem;
	background-color: var(--primary-background);

	:focus {
		border-color: var(--secondary-color);
	}

	:focus + label {
		top: -40%;
		border-radius: 0.25rem;

		font-weight: 500;
		color: var(--text-900);

		display: inline-block;
		background-color: transparent;
	}
`;
const LabelStyled = styled.label`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 1rem;

	user-select: none;
	color: var(--text-700);
	transition: all 0.2s linear;
`;
const TitleStyled = styled.h2`
	margin-bottom: 1.5rem;
	font-size: 2.25rem;
	font-weight: 800;

	color: var(--secondary-color);
	text-shadow: 1px 1px 1px var(--black);
`;
const WrapperStyled = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: red;
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
	::after {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--primary-color);
		opacity: 0.5;
	}
`;

const Account = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(watch('example'));

	return (
		<WrapperStyled>
			<BackgroundStyled src={images.backgroundAccount} alt="" />
			<FormStyled onSubmit={handleSubmit(onSubmit)}>
				<TitleStyled>LOGIN</TitleStyled>
				<GroupInputStyled>
					<InputStyled {...register('email', { required: true })} />
					<LabelStyled htmlFor="email">Nhập email</LabelStyled>
				</GroupInputStyled>

				<GroupInputStyled>
					<InputStyled
						{...register('password', {
							required: true,
							pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,}/,
						})}
						type="password"
						autocomplete="current-password"
					/>
					<LabelStyled htmlFor="email">Nhập password</LabelStyled>
				</GroupInputStyled>

				{errors.password && <span>Không được bỏ trống password</span>}

				<Button label="Đăng nhập" type="primary" />
			</FormStyled>
		</WrapperStyled>
	);
};

export default Account;
