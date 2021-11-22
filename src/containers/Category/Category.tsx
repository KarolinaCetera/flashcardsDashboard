import React, { useState } from "react";
import { Button, Input } from "../../components";

export const Category = () => {
	const [clickCounter, setClickCounter] = useState(1);

	const onClickHandler = (e: any) => {
		e.preventDefault();
		setClickCounter(clickCounter + 1);
		console.log(clickCounter);
	};

	return (
		<div>
			<Input label="Categories" />
			<Button
				buttonText="Add Category"
				type="submit"
				onClick={onClickHandler}
			/>
		</div>
	);
};
