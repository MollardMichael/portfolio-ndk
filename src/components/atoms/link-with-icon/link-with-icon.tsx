import React, {
  type CSSProperties,
  forwardRef,
  memo,
  type ReactNode,
  useRef,
} from "react";

import "./link-with-icon.css";
import { ExternalIcon } from "../icons/external";
import { CopyIcon } from "../icons/copy";
import { Tooltip, TooltipRefProps } from "react-tooltip";

export type LinkWithIconProps = {
  href: string;
  children: ReactNode;
  icon: "external" | "copy";
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
        style,
      },
      forwardedRef
    ) => {
      const className = `link-with-icon ${
        icon === "copy" ? "link-with-icon--copy" : ""
      } ${propClassName}`;

      const tooltipRef1 = useRef<TooltipRefProps>(null)


      const handleIconClick = (e: React.MouseEvent) => {
        if (icon === "copy") {
          e.preventDefault();
          navigator.clipboard.writeText(children.toString());
        }
      };

      return (
        <a
          onClick={handleIconClick}
          ref={forwardedRef}
          href={href}
          target={target}
          rel={rel}
          className={className}
          style={style}
          data-tooltip-id="email-tooltip"
        >
          <span className="link-with-icon__text">{children}</span>
          <span
            className="link-with-icon__icon"
            role={icon === "copy" ? "button" : undefined}
            tabIndex={icon === "copy" ? 0 : undefined}
          >
            {getIcon(icon)}
          </span>
          <Tooltip
            id="email-tooltip"
            openOnClick={true}
            noArrow={true}
            place="left-end"
            afterShow={async () => {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              tooltipRef1.current?.close();
            }}
            ref={tooltipRef1}
          >
            コピーしました！
          </Tooltip>
        </a>
      );
    }
  )
);

function getIcon(icon: string): React.ReactNode {
  switch (icon) {
    case "external":
      return <ExternalIcon />;
    case "copy":
      return <CopyIcon />;
    default:
      throw new Error("Function not implemented.");
  }
}

LinkWithIcon.displayName = "LinkWithIcon";
