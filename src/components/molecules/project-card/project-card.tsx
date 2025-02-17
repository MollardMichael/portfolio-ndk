import React, {
	type CSSProperties,
	forwardRef,
	memo,
	type ReactNode,
} from "react";

import "./project-card.css";
import { Text } from "../../atoms/text/text";
import { Chip } from "../../atoms/chip/chip";

export type ProjectCardProps = {
	href: string;
	tags: { name: ReactNode; mode: "primary" | "secondary" }[];
	title: ReactNode;
	description: ReactNode;
	image: {
		alt: string;
		mobileSrc: string;
		desktopSrc: string;
	};
	style?: CSSProperties;
};

export const ProjectCard = memo<ProjectCardProps>(
	({ style, image, title, description, tags, href }) => {
		return (
			<div className="project-card" style={style}>
				<div className="chips">
					{tags.map((tag) => (
						<Chip mode={tag.mode} key={tag.name.toString()}>
							{tag.name}
						</Chip>
					))}
				</div>
				<picture>
					<source media="(max-width: 799px)" srcSet={image.mobileSrc} />
					<source media="(min-width: 800px)" srcSet={image.desktopSrc} />
					<img src={image.desktopSrc} alt={image.alt} className="image" />
				</picture>
				<a href={href} className="overlay-text">
					<div className="project-info">
						<Text style={{ padding: 0, margin: 0 }} mode="h2">
							{title}
						</Text>
						<Text style={{ padding: 0, margin: 0 }} mode="small">
							{description}
						</Text>
					</div>
				</a>
				<div className="overlay" />
			</div>
		);
	},
);
