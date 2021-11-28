import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import classes from "./Input.module.scss";

export const Input: React.FC<{ label: string; className?: any }> = ({
	label,
	className,
}) => {
	return (
		<InputGroup className={className}>
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
