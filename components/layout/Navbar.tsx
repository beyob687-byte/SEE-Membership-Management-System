"use client";
import "./Navbar.css";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Membership", href: "/membership" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        {/* Logo */}
        <Link
          href="/"
          className="navbar-logo"
          aria-label="Social Enterprise Ethiopia homepage"
          onClick={closeMenu}
        >
          <Image
            src="/logo.png"
            alt="Social Enterprise Ethiopia"
            width={340}
            height={115}
            priority
            className="logo-image"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`navbar-link ${isActive ? "active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Membership CTA */}
        <Link href="/membership" className="navbar-cta">
          Become a Member
          <span aria-hidden="true">↗</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`mobile-navigation ${menuOpen ? "visible" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="mobile-navigation-inner">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`mobile-nav-link ${isActive ? "active" : ""}`}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </Link>
            );
          })}

          <Link
            href="/membership"
            className="mobile-membership-cta"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            Become a Member
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
