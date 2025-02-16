import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Aside } from "./aside";
import { NdkText } from "../../atoms/ndk-text/ndk-text";

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
				<NdkText mode="body">Selectra</NdkText>
				<NdkText mode="body">Location: France, Paris</NdkText>
				<NdkText mode="body">Mission: Content Manager, UI/UX designer</NdkText>
				<NdkText mode="body">
					コンテンツディレクターとして比較記事の編集を担当。コンテンツディレクターとして比較記事の編集を担当。コンテンツディレクターとして比較記事の編集を担当。コンテンツディレクターとして比較記事の編集を担当。コンテンツディレクターとして比較記事の編集を担当。コンテンツディレクターとして比較記事の編集を担当。コンテンツディレクターとして比較記事の編集を担当。コンテンツディレクターとして比較記事の編集を担当。
				</NdkText>
			</div>
		),
	},
};
