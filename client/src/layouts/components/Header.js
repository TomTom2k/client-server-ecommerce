import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiShoppingCart, HiUser } from 'react-icons/hi';
import Button from '../../components/Button';

import configs from '../../configs';

const WrapperStyled = styled.header``;

const ContainerTopHeaderStyled = styled.div`
	width: 100%;
	background-color: var(--primary-background);
	display: flex;
	justify-content: center;
	align-items: center;
`;
const TopHeaderStyled = styled.div`
	width: 100%;
	max-width: var(--max-width-default-layout);
	padding: 1rem 2rem;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const SearchWrapperStyled = styled.div`
	border: 1px solid var(--primary-color);
	border-radius: 1rem;
	overflow: hidden;
	background-color: var(--secondary-background);

	display: flex;
	justify-content: space-between;
	align-items: stretch;

	input {
		padding: 0.2rem 1rem;
	}

	svg {
		width: 4rem;
		height: 1.4rem;
		background-color: var(--primary-color);
		color: var(--white);
		transition: all 0.2s linear;

		:hover {
			filter: brightness(0.8);
		}
	}
`;
const LogoStyled = styled.div`
	font-family: 'DynaPuff', cursive;
	font-size: 2rem;
	font-weight: 700;
	text-shadow: 1px 1px 0.1rem rgba(0, 0, 0, 0.6);
	color: var(--secondary-color);
	user-select: none;
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
const NavStyled = styled.nav`
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

const Header = () => {
	const user = true;
	return (
		<WrapperStyled>
			<ContainerTopHeaderStyled>
				<TopHeaderStyled>
					<SearchWrapperStyled>
						<input type="text" />
						<AiOutlineSearch />
					</SearchWrapperStyled>
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
				<NavStyled>
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
				</NavStyled>
			</ContainerBotHeaderStyled>
		</WrapperStyled>
	);
};

export default Header;
