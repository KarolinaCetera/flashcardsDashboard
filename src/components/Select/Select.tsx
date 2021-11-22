import React from "react";

export const Select: React.FC<{
	label: string;
	id: string;
	options: Array<string>;
}> = ({ label, id, options }) => {
	return (
		<div>
			<label>{label}</label>
			<select name={id} id={id}>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};
