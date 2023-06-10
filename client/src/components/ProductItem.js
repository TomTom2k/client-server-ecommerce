import React from 'react';
import styled from 'styled-components';

import configs from '../configs';

const WrapperStyled = styled.div`
	display: flex;
	padding: 0.5rem;
	border-radius: 0.5rem;

	transition: all 0.2s linear;
	:hover {
		transform: scale(1.05);
		cursor: pointer;
		background-color: var(--primary-background);
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.36);
	}
`;

const ImageStyled = styled.img`
	width: 5rem;
	margin-right: 0.2rem;
	border-radius: 0.25rem;

	object-fit: cover;
`;
const InfoStyled = styled.div``;

const ProductItem = ({ title, image, price }) => {
	return (
		<WrapperStyled>
			<ImageStyled src={configs.url + image} alt="" />
			<InfoStyled>
				<h5>{title}</h5>
				<p>
					{price.toLocaleString('en-US', {
						minimumFractionDigits: 0,
					})}
				</p>
			</InfoStyled>
		</WrapperStyled>
	);
};

export default ProductItem;
