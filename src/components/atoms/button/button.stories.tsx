import type { Meta, StoryObj } from "@storybook/react";

import { ButtonLink } from "./button";

const meta = {
	title: "Atoms/ButtonLink",
	parameters: {
		layout: "centered",
	},
	component: ButtonLink,
} satisfies Meta<typeof ButtonLink>;

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
