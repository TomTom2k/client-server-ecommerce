import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import { BsTiktok, BsInstagram, BsGoogle } from 'react-icons/bs';
import { FaFacebookF, FaPhone } from 'react-icons/fa';

const WrapperStyled = styled.footer`
	margin-top: 2rem;
	width: 100%;
	background-color: var(--primary-color);
`;

const ActionsStyled = styled.div`
	display: flex;
	padding: 1rem 0;
`;
const BotFooterStyled = styled.div`
	text-align: center;
	padding: 1rem;

	color: var(--text-50);
	font-size: 1.125rem;
	font-weight: 600;
	letter-spacing: 0.5px;
	background-color: var(--secondary-color);
`;
const CategoryStyled = styled(Col)`
	color: var(--text-700);
	h5 {
		color: var(--text-900);
		font-size: 1.125rem;
		margin-bottom: 0.25rem;
	}
	li {
		margin-left: 0.5rem;
	}
`;
const ContactStyled = styled.div`
	margin-bottom: 2rem;
	p {
		display: flex;
		align-items: center;
		font-size: 1.25rem;
		> * {
			margin-right: 10px;
		}
	}
`;
const InnerStyled = styled.div`
	width: 100%;
	max-width: var(--max-width-large);

	@media (max-width: 992px) {
		max-width: var(--max-width-laptop);
	}
	@media (max-width: 768px) {
		max-width: var(--max-width-table);
	}
`;
const ItemStyled = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	margin-right: 1.5rem;
	padding: 0.5rem;
	border-radius: 50%;
	background-color: var(--white);
	transition: all 0.3s linear;

	> * {
		width: 100%;
		height: 100%;
	}

	:hover {
		background-color: var(--secondary-color);
		transform: translateY(-5px);

		box-shadow: 0rem 1px 1px var(--white),
			0rem 0.5rem 0.5rem var(--secondary-color);
		> * {
			color: var(--white);
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
const TopFooterStyled = styled.div`
	width: 100%;
	padding: 1rem 2rem;
	display: flex;
	justify-content: center;
`;

const Footer = () => {
	return (
		<WrapperStyled>
			<TopFooterStyled>
				<InnerStyled>
					<Row>
						<Col xs={24} md={8}>
							<LogoStyled>BECE</LogoStyled>
							<ActionsStyled>
								<ItemStyled>
									<FaFacebookF />
								</ItemStyled>
								<ItemStyled>
									<BsTiktok />
								</ItemStyled>
								<ItemStyled>
									<BsInstagram />
								</ItemStyled>
							</ActionsStyled>
							<ContactStyled>
								<p>
									<BsGoogle /> 0387.768.992
								</p>
								<p>
									<FaPhone /> shopBECE@gmail.com
								</p>
							</ContactStyled>
						</Col>
						<Col xs={24} md={16}>
							<Row>
								<CategoryStyled xs={24} md={8}>
									<h5>Mỹ phẩm</h5>
									<ul>
										<li>Kem nền</li>
										<li>Phấn phủ</li>
										<li>Kẻ mắt</li>
										<li>Son môi</li>
										<li>Che khuyết điểm</li>
									</ul>
								</CategoryStyled>
								<CategoryStyled xs={24} md={8}>
									<h5>Dưỡng thể</h5>
									<ul>
										<li>Dưỡng ẩm</li>
										<li>Dưỡng sáng</li>
										<li>Sữa tắm</li>
										<li>Tẩy tế bào chết</li>
									</ul>
								</CategoryStyled>
								<CategoryStyled xs={24} md={8}>
									<ul>
										<li>
											<h5>Nước hoa</h5>
										</li>
										<li>
											<h5>Chăm sóc tóc</h5>
										</li>
										<li>
											<h5>Chăm sóc da</h5>
										</li>
									</ul>
								</CategoryStyled>
							</Row>
						</Col>
					</Row>
				</InnerStyled>
			</TopFooterStyled>
			<BotFooterStyled>©Bản quyền thuộc về BECE shop.</BotFooterStyled>
		</WrapperStyled>
	);
};

export default Footer;
