import React, {
	type CSSProperties,
	forwardRef,
	memo,
	type ReactNode,
} from "react";
import { colors } from "../../constants/design";

export type ButtonLinkProps = {
	ariaControls?: string;
	ariaExpanded?: boolean;
	grow?: boolean;
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

export const NdkButtonLink = memo(
	forwardRef<HTMLAnchorElement, ButtonLinkProps>(
		(
			{
				ariaControls,
				ariaExpanded,
				ariaLabel,
				children,
				grow = false,
				mode = "primary",
				style,
				href,
			},
			forwardedRef,
		) => {
			const isPrimary = mode === "primary";

			return (
				<a
					href={href}
					aria-controls={ariaControls}
					aria-expanded={ariaExpanded}
					aria-label={ariaLabel}
					ref={forwardedRef}
					style={style}
				>
					{typeof children === "string" || typeof children === "number" ? (
						<div style={{ color: colors.gray[900], userSelect: "none" }}>
							{children}
						</div>
					) : (
						<div
							style={{
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "row",
							}}
						>
							{children}
						</div>
					)}
				</a>
			);
		},
	),
);
