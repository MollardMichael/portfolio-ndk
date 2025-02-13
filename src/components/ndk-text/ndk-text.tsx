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
	className?: string;
	style?: CSSProperties;
	children: ReactNode;
};

export const NdkText = memo(
	forwardRef<HTMLHeadingElement, TextProps>(
		({ children, mode, style, inline, className = "" }, forwardedRef) => {
			return match(mode)
				.with("h1", () => (
					<h1
						ref={forwardedRef}
						style={style}
						className={`${inline ? "inline" : "block"} ${className}`}
					>
						{children}
					</h1>
				))
				.with("h2", () => (
					<h2
						ref={forwardedRef}
						style={style}
						className={`${inline ? "inline" : "block"} ${className}`}
					>
						{children}
					</h2>
				))
				.with("h3", () => (
					<h3
						ref={forwardedRef}
						style={style}
						className={`${inline ? "inline" : "block"} ${className}`}
					>
						{children}
					</h3>
				))
				.with("body", () => (
					<span
						ref={forwardedRef}
						style={style}
						className={`body ${inline ? "inline" : "block"} ${className}`}
					>
						{children}
					</span>
				))
				.with("small", () => (
					<span
						ref={forwardedRef}
						style={style}
						className={`small ${inline ? "inline" : "block"} ${className}`}
					>
						{children}
					</span>
				))
				.exhaustive();
		},
	),
);
