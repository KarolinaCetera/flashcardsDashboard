import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import classes from "./Input.module.scss";

export const Input: React.FC<Input> = ({ label, className }) => {
	return (
		<InputGroup className={className} style={{ margin: "5px 0" }}>
			<InputGroup.Text className={classes.inputGroup} id="basic-addon1">
				{label}
			</InputGroup.Text>
			<FormControl
				placeholder={label}
				aria-label={label}
				aria-describedby={label}
			/>
		</InputGroup>
	);
};
