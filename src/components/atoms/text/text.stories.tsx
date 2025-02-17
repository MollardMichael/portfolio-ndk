import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./text";

const meta = {
	title: "Atoms/Text",
	parameters: {
		layout: "centered",
	},
	component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
	args: {
		children: "ユーザー体験を変えるウェブデザインの未来",
		inline: false,
		mode: "h1",
	},
};

export const H2: Story = {
	args: {
		...H1.args,
		mode: "h2",
	},
};

export const H3: Story = {
	args: {
		...H1.args,
		mode: "h3",
	},
};

export const Body: Story = {
	args: {
		...H1.args,
		mode: "body",
	},
};

export const Small: Story = {
	args: {
		...H1.args,
		mode: "small",
	},
};