import React from "react";
import type { Meta, StoryObj } from "@storybook/react/*";

import "./table.css";

import { colors } from "../../constants/design";
import { extractValue, getTokenTable, type Token } from "./utils";

export default {
	title: "Tokens/Colors",
	parameters: {
		options: { showPanel: false },
	},
	tags: ["!autodocs", "!dev"],
} satisfies Meta;
type Story = StoryObj;

const primaryTokens = Object.values(colors.primary).map((value) =>
	value.slice(4, value.length - 1),
);

const secondaryTokens = Object.values(colors.secondary).map((value) =>
	value.slice(4, value.length - 1),
);

const grayscaleTokens = Object.values(colors.gray).map((value) =>
	value.slice(4, value.length - 1),
);

const mapToken = (token: string): Token => ({
	name: token,
	formattedValue: extractValue(token),
	demo: (
		<div
			style={{
				backgroundColor: `var(${token})`,
				height: "20px",
				width: "200px",
			}}
		/>
	),
});

export const primaryColors: Story = {
	render: () => getTokenTable(primaryTokens.map(mapToken)),
};

export const secondaryColors: Story = {
	render: () => getTokenTable(secondaryTokens.map(mapToken)),
};

export const grayColors: Story = {
	render: () => getTokenTable(grayscaleTokens.map(mapToken)),
};
