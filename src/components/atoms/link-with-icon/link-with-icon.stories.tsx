import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { LinkWithIcon } from "./link-with-icon";

const meta = {
  title: "Atoms/LinkWithIcon",
  parameters: {
    layout: "centered",
  },
  component: LinkWithIcon,
  argTypes: {
    target: {
      control: "select",
      options: ["_blank", "_self", "_parent", "_top"],
    },
  },
} satisfies Meta<typeof LinkWithIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "https://figma.com",
    children: "View in Figma",
    icon: "external",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};
