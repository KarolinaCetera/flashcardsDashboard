import React from "react";
import { Form } from "react-bootstrap";
import classes from "./Select.module.scss";

export const Select: React.FC<{
	label: string;
	options: Array<string>;
}> = ({ label, options }) => {
	return (
		<>
			<label className={classes.label}>{label}</label>
			<Form.Select>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</Form.Select>
		</>
	);
};
