import React from "react";
import { Card } from "react-bootstrap";
import { Input } from "../../components";
import classes from "./Word.module.scss";

export const Word: React.FC<Word> = ({ wordLabel }) => (
	<Card className={classes.word}>
		<Card.Body className={classes.wordContainer}>
			<Input label={`${wordLabel} translation`} />
			<Input label={`${wordLabel} example`} />
		</Card.Body>
	</Card>
);
