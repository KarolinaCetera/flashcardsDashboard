import React from "react";
import classes from "../../App.module.scss";
import { Card } from "react-bootstrap";
import { Features } from "../../containers";

export const FirstSection = () => {
	return (
		<Card.Body className={classes.section}>
			<Card className={`${classes.firstSection} ${classes.sectionCard}`}>
				<Features featuresProps="Category" />
				<Features featuresProps="Type" />
			</Card>
		</Card.Body>
	);
};
