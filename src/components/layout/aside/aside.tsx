import React, { type CSSProperties, memo, type ReactNode } from "react";

import "./aside.css";
import { NdkText } from "../../atoms/ndk-text/ndk-text";

export type AsideProps = {
	style?: CSSProperties;
	sectionName?: ReactNode;
	children: ReactNode;
};

export const Aside = memo<AsideProps>(({ style, sectionName, children }) => {
	return (
		<div className={"aside"} style={style}>
			<NdkText mode="body" className="section-title" style={{ flexShrink: 0 }}>
				{sectionName}
			</NdkText>
			{children}
		</div>
	);
});
