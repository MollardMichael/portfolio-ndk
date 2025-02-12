import React, { type ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react/*";

import "./table.css";

import { radii } from "../../constants/design";
import { extractValue, getTokenTable } from "./utils";

export default {
	title: "Tokens/Radius",
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

const spacingTokens = Object.values(radii).map((value) =>
	value.slice(4, value.length - 1),
);

const mapToken = (token: string): Token => ({
	name: token,
	formattedValue: extractValue(token),
	demo: (
		<div
			style={{
				width: "50px",
				height: "50px",
				border: "1px solid var(--color-secondary-500)",
				borderRadius: `var(${token})`,
			}}
		/>
	),
});

export const Default: Story = {
	render: () => getTokenTable(spacingTokens.map(mapToken)),
};
