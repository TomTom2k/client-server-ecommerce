import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ThemeProvider } from 'styled-components';

import App from './App';
import GlobalStyle, { theme } from './components/GlobalStyled';
import mySage from './redux/saga';
import reducers from './redux/reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySage);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<Router>
				<ThemeProvider theme={theme}>
					<App />
					<GlobalStyle />
				</ThemeProvider>
			</Router>
		</React.StrictMode>
	</Provider>
);
