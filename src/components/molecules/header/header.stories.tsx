import type { Meta, StoryObj } from "@storybook/react-vite";

import { Header } from "./header";

const meta = {
	title: "Molecules/Header",
	parameters: {
		layout: "padded",
	},
	component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		mode: "black",
		currentPath: "",
	},
};
