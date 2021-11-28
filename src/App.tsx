import React from "react";
import { Form } from "react-bootstrap";

import classes from "./App.module.scss";
import { FirstSection, SecondSection } from "./sections";

/** RWD, łajzo */

export const App: React.FC = () => {
	return (
		<Form className={classes.form}>
			<FirstSection />
			<SecondSection />
		</Form>
	);
};
