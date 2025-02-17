import React, {
	type CSSProperties,
	forwardRef,
	memo,
	type ReactNode,
} from "react";
import { colors } from "../../../constants/design";

import "./button.css";

export type ButtonLinkProps = {
	ariaControls?: string;
	ariaExpanded?: boolean;
	mode?: "primary" | "secondary";
	style?: CSSProperties;
	href?: string;
} & (
	| {
			ariaLabel: string;
			children?: never;
	  }
	| {
			ariaLabel?: string;
			children: ReactNode;
	  }
);

export const ButtonLink = memo(
	forwardRef<HTMLAnchorElement, ButtonLinkProps>(
		(
			{
				ariaControls,
				ariaExpanded,
				ariaLabel,
				children,
				mode = "primary",
				style,
				href,
			},
			forwardedRef,
		) => {
			return (
				<a
					href={href}
					aria-controls={ariaControls}
					aria-expanded={ariaExpanded}
					aria-label={ariaLabel}
					ref={forwardedRef}
					style={style}
					className={`button ${mode}`}
				>
					{children}
				</a>
			);
		},
	),
);
