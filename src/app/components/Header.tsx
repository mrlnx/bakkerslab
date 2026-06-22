"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Kennis", href: "/kennis", activePath: "/kennis" },
  { label: "Vragenlijst", href: "/vragenlijst#survey", activePath: "/vragenlijst" }
];

function navClass(isActive: boolean) {
  return isActive ? "is-active" : undefined;
}

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const contactHref = pathname === "/" ? "#contact" : "/#contact";

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand-mark" href="/" onClick={() => setIsOpen(false)}>
          <img src="/images/bakkerslab-wordmark.svg" alt="BakkersLab" />
        </a>

        <nav className="nav-links" aria-label="Hoofdnavigatie">
          {links.map((link) => {
            const isActive = pathname.startsWith(link.activePath);

            return (
              <a className={navClass(isActive)} href={link.href} aria-current={isActive ? "page" : undefined} key={link.href}>
                {link.label}
              </a>
            );
          })}
          <a href={contactHref}>Contact</a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Sluit menu" : "Open menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={isOpen ? "mobile-menu is-open" : "mobile-menu"} id="mobile-menu" aria-label="Mobiele navigatie">
        {links.map((link) => {
          const isActive = pathname.startsWith(link.activePath);

          return (
            <a
              className={navClass(isActive)}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              key={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          );
        })}
        <a href={contactHref} onClick={() => setIsOpen(false)}>
          Contact
        </a>
      </nav>
    </header>
  );
}
