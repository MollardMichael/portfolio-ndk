import React, { type CSSProperties, memo } from "react";

import "./header.css";
import { NdkText } from "../../atoms/ndk-text/ndk-text";

export type HeaderProps = {
	style?: CSSProperties;
	mode?: "black" | "white";
	currentPath: string;
};

export const Header = memo<HeaderProps>(
	({ style, mode = "black", currentPath }) => {
		return (
			<header className={`header ${mode}`} style={style}>
				<NdkText mode="h3" style={{ margin: 0 }}>
					Nodoka KON
				</NdkText>
				<nav aria-labelledby="primary-navigation">
					<a href="/" className={currentPath === "" ? "active" : ""}>
						<NdkText mode="h3" style={{ margin: 0 }}>
							Works
						</NdkText>
					</a>
					<a
						href="/about"
						className={currentPath.startsWith("about") ? "active" : ""}
					>
						<NdkText mode="h3" style={{ margin: 0 }}>
							About
						</NdkText>
					</a>
				</nav>
			</header>
		);
	},
);
