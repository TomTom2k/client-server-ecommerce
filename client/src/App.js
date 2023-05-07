import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import { publicRoutes } from './routes';
import DefaultLayout from './layouts';

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
			</Routes>
		</div>
	);
}

export default App;
