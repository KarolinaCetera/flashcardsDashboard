import React from "react";
import { Select } from "../../../components";

export const Features = () => {
	return (
		<div>
			<Select
				label="Choose category:"
				id="type"
				options={["food", "week days"]}
			/>
			<Select label="Choose type:" id="type" options={["verbs", "nouns"]} />
		</div>
	);
};
