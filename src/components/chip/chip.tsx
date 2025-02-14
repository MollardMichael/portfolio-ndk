import React, {
	type CSSProperties,
	forwardRef,
	memo,
	type ReactNode,
} from "react";

import "./chip.css";
import { NdkText } from "../ndk-text/ndk-text";

export type ChipProps = {
	mode?: "primary" | "secondary";
	style?: CSSProperties;
	children: ReactNode;
};

export const Chip = memo(
	forwardRef<HTMLHeadingElement, ChipProps>(
		({ children, mode = "primary", style }, forwardedRef) => {
			return (
				<NdkText
					ref={forwardedRef}
					style={style}
					mode="small"
					inline
					className={`chip ${mode}`}
				>
					{children}
				</NdkText>
			);
		},
	),
);
