import React, { ComponentProps } from "react";

import { Button } from "./Button";
import { Meta, Story } from "@storybook/react";

export default {
	title: "Button",
	component: Button,
} as Meta;

const Template: Story<ComponentProps<typeof Button>> = (args) => (
	<Button {...args} />
);

export const ButtonStory = Template.bind({});
/**
 * Można zrobić reużywalne dla różnych typów
 * */

ButtonStory.args = {
	buttonText: "button",
	type: "submit",
};
