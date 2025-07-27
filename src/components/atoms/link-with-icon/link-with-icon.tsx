import React, {
  type CSSProperties,
  forwardRef,
  memo,
  type ReactNode,
} from "react";

import "./link-with-icon.css";
import { ExternalIcon } from "../icons/external";

export type LinkWithIconProps = {
  href: string;
  children: ReactNode;
  icon: "external";
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  className?: string;
  style?: CSSProperties;
};

export const LinkWithIcon = memo(
  forwardRef<HTMLAnchorElement, LinkWithIconProps>(
    (
      { 
        href, 
        children, 
        icon, 
        target,
        rel,
        className: propClassName = "", 
        style 
      },
      forwardedRef
    ) => {
      const className = `link-with-icon ${propClassName}`;

      return (
        <a 
          ref={forwardedRef}
          href={href}
          target={target}
          rel={rel}
          className={className}
          style={style}
        >
          <span className="link-with-icon__text">{children}</span>
          <span className="link-with-icon__icon">{getIcon(icon)}</span>
        </a>
      );
    }
  )
);

function getIcon(icon: string): React.ReactNode {
    switch (icon) {
    case "external":
        return <ExternalIcon />;
    default:
        throw new Error("Function not implemented.");
    }
}

LinkWithIcon.displayName = "LinkWithIcon";