import React, {
	type CSSProperties,
	forwardRef,
	memo,
	type ReactNode,
} from "react";
import { match } from "ts-pattern";

import "./ndk-text.css";

export type TextProps = {
	mode?: "h1" | "h2" | "h3" | "body" | "small";
	inline?: boolean;
	style?: CSSProperties;
	children: ReactNode;
};

export const NdkText = memo(
	forwardRef<HTMLHeadingElement, TextProps>(
		({ children, mode, style, inline }, forwardedRef) => {
			return match(mode)
				.with("h1", () => (
					<h1
						ref={forwardedRef}
						style={style}
						className={inline ? "inline" : "block"}
					>
						{children}
					</h1>
				))
				.with("h2", () => (
					<h2
						ref={forwardedRef}
						style={style}
						className={inline ? "inline" : "block"}
					>
						{children}
					</h2>
				))
				.with("h3", () => (
					<h3
						ref={forwardedRef}
						style={style}
						className={inline ? "inline" : "block"}
					>
						{children}
					</h3>
				))
				.with("body", () => (
					<span
						ref={forwardedRef}
						style={style}
						className={inline ? "body inline" : "body block"}
					>
						{children}
					</span>
				))
				.with("small", () => (
					<span
						ref={forwardedRef}
						style={style}
						className={inline ? "small inline" : "small block"}
					>
						{children}
					</span>
				))
				.exhaustive();
		},
	),
);
