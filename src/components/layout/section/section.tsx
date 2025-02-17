import React, { type CSSProperties, memo, type ReactNode } from "react";

import "./section.css";
import { Text } from "../../atoms/text/text";

export type SectionProps = {
	style?: CSSProperties;
	title?: string;
	subTitle?: string;
	children: ReactNode;
};

export const Section = memo<SectionProps>(
	({ style, subTitle, title, children }) => {
		return (
			<section className={"section"} style={style}>
				{subTitle && (
					<Text mode="h3" className="subtitle" style={{ margin: 0 }}>
						{subTitle}
					</Text>
				)}
				{title && (
					<Text mode="h2" className="title" style={{ margin: 0 }}>
						{title}
					</Text>
				)}
				<div className="children">{children}</div>
			</section>
		);
	},
);
