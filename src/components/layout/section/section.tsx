import React, { type CSSProperties, memo, type ReactNode } from "react";

import "./section.css";
import { NdkText } from "../../atoms/ndk-text/ndk-text";

export type SectionProps = {
	style?: CSSProperties;
	title: string;
	subTitle: string;
	children: ReactNode;
};

export const Section = memo<SectionProps>(
	({ style, subTitle, title, children }) => {
		return (
			<section className={"section"} style={style}>
				<NdkText mode="h3" className="subtitle" style={{ margin: 0 }}>
					{subTitle}
				</NdkText>
				<NdkText mode="h2" className="title" style={{ margin: 0 }}>
					{title}
				</NdkText>
				{children}
			</section>
		);
	},
);
