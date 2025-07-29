import React, {
  type CSSProperties,
  memo,
} from "react";

import "./footer.css";
import { Text } from "../../atoms/text/text";
import { LinkWithIcon } from "../../atoms/link-with-icon/link-with-icon";

export type FooterProps = {
  style?: CSSProperties;
  className?: string;
};

export const Footer = memo<FooterProps>(({ style, className = "" }) => {
  const handleBackToTop = (e: React.MouseEvent) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`footer ${className}`} style={style}>
      <div className="content">
        <button onClick={handleBackToTop} className="back-to-top">
          <Text mode="body" inline>ページトップへ戻る</Text>
        </button>

        <nav className="nav-links">
          <a href="/">
            <Text mode="body">WORKS</Text>
          </a>
          <a href="/about">
            <Text mode="body">ABOUT</Text>
          </a>
          <LinkWithIcon href="/ui-kit" icon="external" target="_blank">
            UI KIT
          </LinkWithIcon>
        </nav>

        <LinkWithIcon
          href="mailto:nodoka.k036@gmail.com"
          icon="copy"
          className="email-link"
        >
          nodoka.k036@gmail.com
        </LinkWithIcon>
        

        <div className="copyright">
          <Text mode="body">2025 © Designed by Nodoka Kon</Text>
        </div>
      </div>

      <img className="gradiant" src="/gradiant.svg" alt="" />
    </footer>
  );
});

Footer.displayName = "Footer";
