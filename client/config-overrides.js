const { override, useBabelRc, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useBabelRc(),
	addWebpackAlias({
		'~': path.resolve(__dirname, 'src'),
	})
);
