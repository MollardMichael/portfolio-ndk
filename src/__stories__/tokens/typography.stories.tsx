import React, { type ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react/*";

import "./table.css";

import { Text } from "../../components/atoms/text/text";

export default {
	title: "Tokens/Typography",
	parameters: {
		options: { showPanel: false },
	},
	tags: ["!autodocs", "!dev"],
} satisfies Meta;
type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<>
			<Text mode="h1">ユーザー体験を変えるウェブデザインの未来</Text>
			<Text mode="h2">ユーザー体験を変えるウェブデザインの未来</Text>
			<Text mode="h3">ユーザー体験を変えるウェブデザインの未来</Text>
			<Text mode="body">ユーザー体験を変えるウェブデザインの未来</Text>
			<Text mode="small">ユーザー体験を変えるウェブデザインの未来</Text>
		</>
	),
};
