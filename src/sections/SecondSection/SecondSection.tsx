import React from "react";
import { Button, Card } from "react-bootstrap";
import classes from "../../App.module.scss";
import { Settings, Word } from "../../containers";

export const SecondSection: React.FC = () => (
	<Card.Body className={classes.section}>
		<Card className={`${classes.secondSection} ${classes.sectionCard}`}>
			<Word wordLabel="English" />
			<Word wordLabel="Spanish" />
			<Settings />
			<Button variant="success" type="button">
				Add Word
			</Button>
		</Card>
	</Card.Body>
);
