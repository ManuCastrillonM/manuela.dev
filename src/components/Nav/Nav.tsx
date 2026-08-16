import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { MenuIcon, CloseIcon } from "../Icons/Icons";
import { navLinks, nav } from "../../data/nav";
import { ui } from "../../data/ui";
import "./Nav.css";

export function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="nav">
      <div className="nav-bar container">
        <a href="/#top" className="nav-logo" aria-label={nav.logoAriaLabel}>
          {ui.siteInitials}
        </a>

        <nav className="nav-links" aria-label={nav.primaryAriaLabel}>
          {navLinks.map((link) => {
            const isRoute = !link.to.includes("#");
            const isActive = link.activePaths?.includes(pathname) ?? false;
            const className = `nav-link${isActive ? " nav-link--active" : ""}`;
            return isRoute ? (
              <Link key={link.to} to={link.to} className={className} aria-current={isActive ? "page" : undefined}>
                {link.label}
              </Link>
            ) : (
              <a
                key={link.to}
                href={link.to}
                className={className}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            type="button"
            className="nav-menu-button"
            aria-label={open ? nav.closeMenuLabel : nav.openMenuLabel}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`nav-mobile${open ? " nav-mobile--open" : ""}`}>
        <nav aria-label={nav.mobileAriaLabel}>
          {navLinks.map((link) => {
            const isRoute = !link.to.includes("#");
            const isActive = link.activePaths?.includes(pathname) ?? false;
            const className = `nav-mobile-link${isActive ? " nav-mobile-link--active" : ""}`;
            return isRoute ? (
              <Link
                key={link.to}
                to={link.to}
                className={className}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.to}
                href={link.to}
                className={className}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
          <a href="/#connect" className="btn btn-primary nav-mobile-cta" onClick={() => setOpen(false)}>
            {nav.ctaLabel}
            <span className="arrow" aria-hidden="true">
              {ui.arrowRight}
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
