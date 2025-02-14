import React, {
	type CSSProperties,
	forwardRef,
	memo,
	type ReactNode,
} from "react";

import "./project-card.css";
import { NdkText } from "../ndk-text/ndk-text";
import { Chip } from "../chip/chip";

export type ProjectCardProps = {
	project: {
		href: string;
		tags: { name: ReactNode; mode: "primary" | "secondary" }[];
		title: ReactNode;
		description: ReactNode;
		image: {
			alt: string;
			mobileSrc: string;
			desktopSrc: string;
		};
	};
	style?: CSSProperties;
};

export const ProjectCard = memo<ProjectCardProps>(
	({ style, project: { image, title, description, tags, href } }) => {
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
				<a href={href} className="overlay">
					<div className="project-info">
						<NdkText
							style={{ padding: 0, margin: 0 }}
							mode="h2"
							className={"chip"}
						>
							{title}
						</NdkText>
						<NdkText
							style={{ padding: 0, margin: 0 }}
							mode="small"
							className={"chip"}
						>
							{description}
						</NdkText>
					</div>
				</a>
			</div>
		);
	},
);
