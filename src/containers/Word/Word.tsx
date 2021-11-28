import React from "react";
import { Card } from "react-bootstrap";
import { Input } from "../../components";
import classes from "./Word.module.scss";

export const Word: React.FC<{ wordProps: string }> = ({ wordProps }) => {
	return (
		<Card className={classes.word}>
			<Card.Body className={classes.wordContainer}>
				<Input label={`${wordProps} translation`} />
				<Input label={`${wordProps} example`} />
			</Card.Body>
		</Card>
	);
};
