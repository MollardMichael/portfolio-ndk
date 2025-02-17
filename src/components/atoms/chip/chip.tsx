import React, {
	type CSSProperties,
	forwardRef,
	memo,
	type ReactNode,
} from "react";

import "./chip.css";
import { Text } from "../text/text";

export type ChipProps = {
	mode?: "primary" | "secondary";
	style?: CSSProperties;
	children: ReactNode;
};

export const Chip = memo(
	forwardRef<HTMLHeadingElement, ChipProps>(
		({ children, mode = "primary", style }, forwardedRef) => {
			return (
				<Text
					ref={forwardedRef}
					style={style}
					mode="small"
					inline
					className={`chip ${mode}`}
				>
					{children}
				</Text>
			);
		},
	),
);
