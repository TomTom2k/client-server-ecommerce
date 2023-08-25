import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '~/App';
import GlobalStyles from './components/GlobalStyles';
import AuthProvide from './AuthToken';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GlobalStyles>
			<Router>
				<AuthProvide>
					<App />
				</AuthProvide>
			</Router>
		</GlobalStyles>
	</React.StrictMode>
);
