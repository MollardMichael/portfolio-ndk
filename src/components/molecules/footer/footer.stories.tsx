import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Footer } from "./footer";

const meta = {
  title: "Molecules/Footer",
  parameters: {
    layout: "fullscreen",
  },
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
