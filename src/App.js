import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import {MainPage} from './pages/MainPage';
import {SettingsPage} from './pages/SettingsPage';
import {NotFoundPage} from './pages/NotFoundPage';
import {Footer} from './components/Footer';
import {LINKS} from './const';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/404" component={NotFoundPage} />
				<Route>
					<div className="container">
						<Switch>
							<Route path="/" component={MainPage} exact />
							<Route path="/settings" component={SettingsPage} />
							<Route render={() => <Redirect to="/404" />} />
						</Switch>
						<Footer links={LINKS} copyright="Anastasiya Vladimirova" />
					</div>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
