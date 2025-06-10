import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Aside } from "./aside";
import { Text } from "../../atoms/text/text";

const meta = {
	title: "Layout/Aside",
	parameters: {
		layout: "padded",
	},
	component: Aside,
} satisfies Meta<typeof Aside>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		sectionName: "2022 - Now",
		children: (
			<div>
				<Text mode="body">Selectra</Text>
				<Text mode="body">Location: France, Paris</Text>
				<Text mode="body">Mission: Content Manager, UI/UX designer</Text>
				<Text mode="body">
					コンテンツディレクターとして比較記事の編集を担当。コンテンツディレクターとして比較記事の編集を担当。コンテンツディレクターとして比較記事の編集を担当。コンテンツディレクターとして比較記事の編集を担当。コンテンツディレクターとして比較記事の編集を担当。コンテンツディレクターとして比較記事の編集を担当。コンテンツディレクターとして比較記事の編集を担当。コンテンツディレクターとして比較記事の編集を担当。
				</Text>
			</div>
		),
	},
};
