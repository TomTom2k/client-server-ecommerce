import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';

const WrapperStyled = styled.div``;
const ContainerStyled = styled.div``;
const DefaultLayout = ({ children }) => {
	return (
		<WrapperStyled>
			<Header />
			<ContainerStyled>{children}</ContainerStyled>
			<Footer />
		</WrapperStyled>
	);
};
export default DefaultLayout;
