import type { Meta, StoryObj } from "@storybook/react";

import { NdkButtonLink } from "./ndk-button";

const meta = {
	title: "Atoms/NdkButtonLink",
	parameters: {
		layout: "centered",
	},
	component: NdkButtonLink,
} satisfies Meta<typeof NdkButtonLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "見る",
		href: "https://nodoka-kon.me",
		mode: "primary",
	},
};

export const Secondary: Story = {
	args: {
		children: "見る",
		href: "https://nodoka-kon.me",
		mode: "secondary",
	},
};
