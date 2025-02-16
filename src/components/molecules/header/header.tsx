import React, { type CSSProperties, memo } from "react";

import "./header.css";
import { NdkText } from "../../atoms/ndk-text/ndk-text";

export type HeaderProps = {
	style?: CSSProperties;
	mode?: "black" | "white";
};

export const Header = memo<HeaderProps>(({ style, mode = "black" }) => {
	return (
		<header className={`header ${mode}`} style={style}>
			<NdkText mode="h3" style={{ margin: 0 }}>
				Nodoka KON
			</NdkText>
			<nav aria-labelledby="primary-navigation">
				<a href="/">
					<NdkText mode="h3" style={{ margin: 0 }}>
						Works
					</NdkText>
				</a>
				<a href="/about">
					<NdkText mode="h3" style={{ margin: 0 }}>
						About
					</NdkText>
				</a>
			</nav>
		</header>
	);
});
