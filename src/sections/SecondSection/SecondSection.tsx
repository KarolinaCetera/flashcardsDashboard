import React from "react";
import { Card } from "react-bootstrap";
import classes from "../../App.module.scss";
import { Settings, Word } from "../../containers";

export const SecondSection = () => {
	return (
		<Card.Body className={classes.section}>
			<Card className={`${classes.secondSection} ${classes.sectionCard}`}>
				<Word wordProps="English" />
				<Word wordProps="Spanish" />
				<Settings />
			</Card>
		</Card.Body>
	);
};
