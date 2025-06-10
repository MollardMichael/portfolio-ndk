import type { Meta, StoryObj } from "@storybook/react-vite";

import { Chip } from "./chip";

const meta = {
	title: "Atoms/Chip",
	parameters: {
		layout: "centered",
	},
	component: Chip,
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "primary chip",
		mode: "primary",
	},
};

export const Secondary: Story = {
	args: {
		children: "secondary chip",
		mode: "secondary",
	},
};
