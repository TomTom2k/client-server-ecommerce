import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './components/Header';

const WrapperStyled = styled.div``;
const ContainerStyled = styled.div``;
const DefaultLayout = ({ children }) => {
	return (
		<WrapperStyled>
			<Header />
			<ContainerStyled>{children}</ContainerStyled>
		</WrapperStyled>
	);
};
export default DefaultLayout;
