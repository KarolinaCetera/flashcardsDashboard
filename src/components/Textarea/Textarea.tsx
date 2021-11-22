import React from "react";

export const Textarea: React.FC<{ label: string }> = ({ label }) => {
	return (
		<div>
			<label id={label}>{label}</label>
			<textarea name={label} id={label} />
		</div>
	);
};
