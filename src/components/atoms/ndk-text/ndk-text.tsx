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
			return match({ mode, inline })
				.with({ mode: "h1" }, () => (
					<h1
						ref={forwardedRef}
						style={style}
						className={`${inline ? "inline" : "block"} ${className}`}
					>
						{children}
					</h1>
				))
				.with({ mode: "h2" }, () => (
					<h2
						ref={forwardedRef}
						style={style}
						className={`${inline ? "inline" : "block"} ${className}`}
					>
						{children}
					</h2>
				))
				.with({ mode: "h3" }, () => (
					<h3
						ref={forwardedRef}
						style={style}
						className={`${inline ? "inline" : "block"} ${className}`}
					>
						{children}
					</h3>
				))
				.with({ mode: "body", inline: true }, () => (
					<span
						ref={forwardedRef}
						style={style}
						className={`body inline ${className}`}
					>
						{children}
					</span>
				))
				.with({ mode: "body" }, () => (
					<div
						ref={forwardedRef}
						style={style}
						className={`body block ${className}`}
					>
						{children}
					</div>
				))
				.with({ mode: "small", inline: true }, () => (
					<span
						ref={forwardedRef}
						style={style}
						className={`small inline ${className}`}
					>
						{children}
					</span>
				))
				.with({ mode: "small" }, () => (
					<div
						ref={forwardedRef}
						style={style}
						className={`small block ${className}`}
					>
						{children}
					</div>
				))
				.exhaustive();
		},
	),
);
