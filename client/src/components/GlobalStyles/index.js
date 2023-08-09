import React from 'react';
import PropTypes from 'prop-types';

import './GlobalStyles.module.scss';

const GlobalStyles = ({ children }) => {
	return <div>{children}</div>;
};

GlobalStyles.propTypes = {
	children: PropTypes.node.isRequired,
};

export default GlobalStyles;
