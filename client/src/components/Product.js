import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineShoppingCart, AiOutlineInfoCircle } from 'react-icons/ai';

import configs from '../configs';

const WrapperStyled = styled(Link)`
	width: 100%;
	padding: 1rem;
	border-radius: 1rem;
	background-color: var(--primary-background);
	box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.2);
	overflow: hidden;

	position: relative;
	transition: all 0.2s linear;
	:hover {
		cursor: pointer;
		transform: scale(1.01);
		> * {
			transform: translateX(0);
		}
	}

	> :nth-child(1) {
		top: 1.5rem;
	}

	> :nth-child(2) {
		top: 5rem;
	}
`;

const IconStyled = styled.div`
	position: absolute;
	left: 1.5rem;

	width: 3rem;
	height: 3rem;
	padding: 0.5rem;
	border-radius: 50%;
	background-color: var(--primary-background);

	transform: translateX(-6rem);
	transition: all 0.2s ease-in-out;
	box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.36);
	z-index: 100;
	> * {
		width: 100%;
		height: 100%;
	}

	:hover {
		background-color: var(--secondary-color);
		color: white;
	}
`;
const ImgStyled = styled.img`
	width: 100%;
	aspect-ratio: 1/1;
	border-radius: 0.5rem;
	box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.36);
	position: relative;
`;
const PriceStyled = styled.p`
	font-size: 1.675rem;
`;
const SubTitleStyled = styled.p`
	color: var(--secondary-color);
	font-weight: 600;
	font-size: 1.125rem;
`;
const TitleStyled = styled.h3``;

const Product = ({ product }) => {
	return (
		<WrapperStyled to={configs.routes.productDetail + product._id}>
			<IconStyled>
				<AiOutlineShoppingCart />
			</IconStyled>
			<IconStyled>
				<AiOutlineInfoCircle />
			</IconStyled>
			<ImgStyled
				src={configs.url + product.images[0]}
				alt={product.title}
			/>
			<TitleStyled>{product.title}</TitleStyled>
			<SubTitleStyled>{product.brand.title}</SubTitleStyled>
			<PriceStyled>
				{product.price.toLocaleString('en-US', {
					minimumFractionDigits: 0,
				})}
			</PriceStyled>
		</WrapperStyled>
	);
};

export default Product;
