import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Caption } from "./caption";
import { render } from "astro:content";

const meta = {
	title: "Atoms/Caption",
	parameters: {
		layout: "centered",
	},
	component: Caption,
} satisfies Meta<typeof Caption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "『センス・オブ・ワンダー（The Sense of Wonder）』針葉樹の葉は銀色のさやをまとい、シダ類はまるで熱帯ジャングルのように青々と茂り、そのとがった一枚一枚の葉先からは水晶のようなしずくをしたたらせます。",
	},
	render: (args) => {
		return <div>
			<img style={{width: "100%"}} src="/images/hero.png" alt="Example image with caption" />
			<Caption {...args} />
		</div>;
	},
};