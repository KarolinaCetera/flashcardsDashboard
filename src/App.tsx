import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Dashboard} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;

/**
 * Hiszpański
 * Hiszpański przykład
 * Angielski
 * Angielski przykład
 * Kategoria
 * Typ
 *
 * */
