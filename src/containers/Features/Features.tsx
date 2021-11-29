import React from "react";
import { Button, Card } from "react-bootstrap";
import classes from "./Features.module.scss";
import { Input } from "../../components";

export const Features: React.FC<Features> = ({ featuresLabel }) => (
	<Card style={{ margin: "10px 0" }}>
		<Card.Body className={classes.features}>
			<Input label={featuresLabel} className={classes.featuresInput} />
			<Button type="button">Add Category</Button>
		</Card.Body>
	</Card>
);
