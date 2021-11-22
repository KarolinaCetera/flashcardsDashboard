import React from "react";

export const Button: React.FC<{
	buttonText: string;
	type: "reset" | "submit" | "button" | undefined;
	onClick?: ({ ...args }) => void;
}> = ({ buttonText, type, onClick }) => {
	return (
		<button onClick={onClick} type={type}>
			{buttonText}
		</button>
	);
};
