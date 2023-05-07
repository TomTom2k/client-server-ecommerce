import React from 'react';
import styled from 'styled-components';

import AsideAdmin from './components/AsideAdmin';

const WrapperStyled = styled.div`
	display: flex;
`;
const AsideStyled = styled.aside`
	width: var(--width-aside);
`;
const ContainerStyled = styled.div`
	width: 100%;
	padding: 2rem 1rem;
`;

const AdminLayout = ({ children }) => {
	return (
		<WrapperStyled>
			<AsideStyled>
				<AsideAdmin />
			</AsideStyled>
			<ContainerStyled>{children}</ContainerStyled>
		</WrapperStyled>
	);
};

export default AdminLayout;
