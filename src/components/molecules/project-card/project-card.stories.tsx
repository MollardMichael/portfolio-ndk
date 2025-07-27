import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { ProjectCard } from "./project-card";

const meta = {
  title: "Molecules/ProjectCard",
  parameters: {
    layout: "centered",
  },
  component: ProjectCard,
} satisfies Meta<typeof ProjectCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    tags: [
      { name: "primary chip", mode: "primary" },
      { name: "secondary chip", mode: "secondary" },
    ],
    title: "Artful",
    description: [
      "Description of the project",
      "It’s the best thing since sliced bread",
    ],
    image: {
      alt: "Descriptive image of the project",
      desktopSrc: "/images/corgi.jpg",
      mobileSrc: "/images/corgi.jpg",
    },
  },
};
