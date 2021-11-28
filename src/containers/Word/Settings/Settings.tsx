import React from "react";
import { Select } from "../../../components";
import { Card } from "react-bootstrap";

export const Settings = () => {
	return (
		<Card>
			<Card.Body>
				<Select label="Choose category:" options={["food", "week days"]} />
				<Select label="Choose type:" options={["verbs", "nouns"]} />
			</Card.Body>
		</Card>
	);
};
