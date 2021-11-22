import React from "react";
import classes from "./Dashboard.module.scss";
import { Button, WordTitle } from "../components";
import { Category, Type } from "../containers";
import { English, Features, Spanish } from "../containers/Word";

export const Dashboard: React.FC<Props> = (props: Props) => {
	return (
		<form>
			<Category />
			<Type />
			<div>
				<WordTitle />
				<Spanish />
				<English />
				<Features />
				<Button buttonText="Add Word" type="submit" />
			</div>
		</form>
	);
};
