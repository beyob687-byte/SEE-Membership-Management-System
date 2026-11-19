"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import "./header.css";

const navItems = [
  { label: "Home", href: "/" },
  //   { label: "About Us", href: "/event" },
  //   { label: "Our Work", href: "/our-work" },
  //   { label: "Membership", href: "/membership" },
  //   { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo */}
        <Link
          href="/"
          className="brand"
          aria-label="Social Enterprise Ethiopia home"
        >
          <Image
            src=""
            alt="Social Enterprise Ethiopia"
            width={299}
            height={63}
            priority
            className="brand-logo"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? "menu-active" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation */}
        <nav
          id="main-navigation"
          className={`main-nav ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "nav-active" : ""}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/join-us"
            className="header-cta"
            onClick={() => setMenuOpen(false)}
          >
            Join Us <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
