import React, { type CSSProperties, memo, type ReactNode } from "react";

import "./aside.css";
import { Text } from "../../atoms/text/text";

export type AsideProps = {
	style?: CSSProperties;
	sectionName?: ReactNode;
	children: ReactNode;
};

export const Aside = memo<AsideProps>(({ style, sectionName, children }) => {
	return (
		<div className={"aside"} style={style}>
			<Text mode="body" className="section-title" style={{ flexShrink: 0 }}>
				{sectionName}
			</Text>
			{children}
		</div>
	);
});
