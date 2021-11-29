import React from "react";
import classes from "../../App.module.scss";
import { Card } from "react-bootstrap";
import { Features } from "../../containers";

export const FirstSection: React.FC = () => {
	return (
		<Card.Body className={classes.section}>
			<Card className={`${classes.firstSection} ${classes.sectionCard}`}>
				<Features featuresLabel="Category" />
				<Features featuresLabel="Type" />
			</Card>
		</Card.Body>
	);
};
