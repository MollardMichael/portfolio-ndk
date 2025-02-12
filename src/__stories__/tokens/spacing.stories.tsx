import React, { type ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react/*";

import "./table.css";

import { spacings } from "../../constants/design";
import { extractValue, getTokenTable } from "./utils";

export default {
	title: "Tokens/Spacing",
	parameters: {
		options: { showPanel: false },
	},
	tags: ["!autodocs", "!dev"],
} satisfies Meta;
type Story = StoryObj;

type Token = {
	name: string;
	formattedValue: ReactNode;
	demo: ReactNode;
};

const spacingTokens = Object.values(spacings).map((value) =>
	value.slice(4, value.length - 1),
);

const mapToken = (token: string): Token => ({
	name: token,
	formattedValue: extractValue(token),
	demo: (
		<div
			style={{
				height: "20px",
				backgroundColor: "var(--color-primary-500)",
				width: `var(${token})`,
			}}
		/>
	),
});

export const Default: Story = {
	render: () => getTokenTable(spacingTokens.map(mapToken)),
};
