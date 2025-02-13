import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { NdkText } from "./ndk-text";

const meta = {
	title: "Atoms/NdkText",
	parameters: {
		layout: "centered",
	},
	component: NdkText,
} satisfies Meta<typeof NdkText>;

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

export const All: StoryObj = {
	tags: ["!autodocs", "!dev"],
	render: () => (
		<>
			<NdkText mode="h1">ユーザー体験を変えるウェブデザインの未来</NdkText>
			<NdkText mode="h2">ユーザー体験を変えるウェブデザインの未来</NdkText>
			<NdkText mode="h3">ユーザー体験を変えるウェブデザインの未来</NdkText>
			<NdkText mode="body">ユーザー体験を変えるウェブデザインの未来</NdkText>
			<NdkText mode="small">ユーザー体験を変えるウェブデザインの未来</NdkText>
		</>
	),
};
