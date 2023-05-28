import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
	aspect-ratio: 20/5;
	background: linear-gradient(transparent, rgba(0, 0, 0, 0.136));
	position: relative;
`;
const BackgroundStyled = styled.img`
	width: 100%;
	height: 100%;
	object-fit: fill;
	z-index: -1;
	position: absolute;
`;
const EventItem = ({ background }) => {
	return (
		<WrapperStyled>
			<BackgroundStyled src={background} />
		</WrapperStyled>
	);
};

export default EventItem;
