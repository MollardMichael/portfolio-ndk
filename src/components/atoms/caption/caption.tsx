import React, {
  type CSSProperties,
  forwardRef,
  memo,
  type ReactNode,
} from "react";

import { Text } from "../text/text";

import "./caption.css";

export type CaptionProps = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export const Caption = memo(
  forwardRef<HTMLHeadingElement, CaptionProps>(
    (
      { children, style, className },
      forwardedRef
    ) => {
      return <Text
            mode="small"
            ref={forwardedRef}
            style={style}
            className={`caption ${className}`}
          >
            {children}
          </Text>
    }
  )
);
