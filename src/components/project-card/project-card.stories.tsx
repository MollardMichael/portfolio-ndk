import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

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
		description: (
			<>
				<div>Description of the project</div>
				<div>It’s the best thing since sliced bread</div>
			</>
		),
		image: {
			alt: "Descriptive image of the project",
			desktopSrc: "/src/assets/art.png",
			mobileSrc: "/src/assets/art.png",
		},
	},
};
