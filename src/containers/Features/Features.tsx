import React from "react";
import { Button, Card } from "react-bootstrap";
import classes from "./Features.module.scss";
import { Input } from "../../components";

export const Features: React.FC<{ featuresProps: any }> = ({
	featuresProps,
}) => {
	return (
		<Card style={{ margin: "10px 0" }}>
			<Card.Body className={classes.features}>
				<Input label={featuresProps} className={classes.featuresInput} />
				<Button type={featuresProps}>Add Category</Button>
			</Card.Body>
		</Card>
	);
};
