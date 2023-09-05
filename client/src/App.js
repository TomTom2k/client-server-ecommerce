import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import { privateRoutes, publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<div className="App">
			<Routes>
				{publicRoutes.map((route, index) => {
					const Page = route.component;
					let Layout = DefaultLayout;

					if (route.layout === null) Layout = Fragment;
					else if (route.layout) Layout = route.layout;
					return (
						<Route
							key={index}
							path={route.path}
							element={
								<Layout>
									<Page />
								</Layout>
							}
						/>
					);
				})}

				{/* Private Routes */}
				{privateRoutes.map((route, index) => {
					return (
						<Route
							key={index}
							path={route.path}
							element={
								<PrivateRoute roles={route.role}>
									{route.layout ? (
										<route.layout />
									) : (
										<route.component />
									)}
								</PrivateRoute>
							}
						/>
					);
				})}
			</Routes>
		</div>
	);
}

export default App;
