import React, { type CSSProperties, memo } from "react";

import "./header.css";
import { Text } from "../../atoms/text/text";

export type HeaderProps = {
	style?: CSSProperties;
	mode?: "black" | "white";
	currentPath: string;
};

export const Header = memo<HeaderProps>(
	({ style, mode = "black", currentPath }) => {
		return (
			<header className={`header ${mode}`} style={style}>
				<Text mode="h3" className="desktop-title" style={{ margin: 0 }}>
					Nodoka KON
				</Text>
				<Text mode="h3" className="mobile-title" style={{ margin: 0 }}>
					NK
				</Text>
				<nav aria-labelledby="primary-navigation">
					<a href="/" className={currentPath === "" ? "active" : ""}>
						<Text mode="h3" style={{ margin: 0 }}>
							Works
						</Text>
					</a>
					<a
						href="/about"
						className={currentPath.startsWith("about") ? "active" : ""}
					>
						<Text mode="h3" style={{ margin: 0 }}>
							About
						</Text>
					</a>
				</nav>
			</header>
		);
	},
);
