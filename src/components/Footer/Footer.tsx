import { Sparkle } from "../Doodles";
import { footer } from "../../data/footer";
import { ui } from "../../data/ui";
import "./Footer.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="/#top" className="footer-logo">
          {ui.siteInitials}
        </a>
        <p className="footer-copyright">
          {footer.copyrightSymbol} {year} {footer.copyrightText}
        </p>
        <Sparkle className="doodle doodle--lavender footer-doodle" />
      </div>
    </footer>
  );
}
