import React from "react";

export const Input: React.FC<{ label: string }> = ({ label }) => {
	return (
		<div>
			<label id={label}>{label}</label>
			<input id={label} type="text" />
		</div>
	);
};
