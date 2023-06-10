import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { HiShoppingCart, HiUser } from 'react-icons/hi';
import Button from '../../components/Button';

import configs from '../../configs';
import Search from './Search';

const WrapperStyled = styled.header`
	position: sticky;
	top: 0;
	z-index: 100000000000000;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
`;

const ActionsStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ContainerBotHeaderStyled = styled.div`
	width: 100%;
	background-color: var(--secondary-background);
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0 1rem rgba(0, 0, 0, 0.036);
`;
const ContainerTopHeaderStyled = styled.div`
	width: 100%;
	background-color: var(--primary-background);
	display: flex;
	justify-content: center;
	align-items: center;
`;
const LogoStyled = styled.div`
	font-family: 'DynaPuff', cursive;
	font-size: 2rem;
	font-weight: 700;
	text-shadow: 1px 1px 0.1rem rgba(0, 0, 0, 0.6);
	color: var(--secondary-color);
	user-select: none;
`;
const NavContainerStyled = styled.nav`
	width: 100%;
	max-width: var(--max-width-default-layout);
	padding: 1rem 2rem;

	display: flex;
	justify-content: space-evenly;
	align-items: center;

	user-select: none;
`;
const NavItemStyled = styled(Link)`
	font-size: 1.25rem;
	font-weight: 500;
	transition: all 0.2s linear;

	:hover {
		color: var(--secondary-color);
		transform: translateY(-2px);
	}
`;
const TopHeaderStyled = styled.div`
	width: 100%;
	max-width: var(--max-width-default-layout);
	padding: 1rem 2rem;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Header = () => {
	const user = true;
	return (
		<WrapperStyled>
			<ContainerTopHeaderStyled>
				<TopHeaderStyled>
					<Search />
					<LogoStyled>BECE</LogoStyled>
					<ActionsStyled>
						<Button
							icon={<HiShoppingCart />}
							label="Giỏ hàng"
							href={configs.routes.cart}
						/>
						{user ? (
							<Button
								icon={<HiUser />}
								label="ThanhTin"
								type="ghost"
								href={configs.routes.profile}
							/>
						) : (
							<Button
								label="Đăng nhập"
								type="primary"
								href={configs.routes.account}
							/>
						)}
					</ActionsStyled>
				</TopHeaderStyled>
			</ContainerTopHeaderStyled>
			<ContainerBotHeaderStyled>
				<NavContainerStyled>
					<NavItemStyled to={configs.routes.home}>
						Trang chủ
					</NavItemStyled>
					|
					<NavItemStyled to={configs.routes.list}>
						Danh sách
					</NavItemStyled>
					|
					<NavItemStyled to={configs.routes.contact}>
						Liên hệ
					</NavItemStyled>
					|
					<NavItemStyled to={configs.routes.intro}>
						Giới thiệu
					</NavItemStyled>
				</NavContainerStyled>
			</ContainerBotHeaderStyled>
		</WrapperStyled>
	);
};

export default Header;
