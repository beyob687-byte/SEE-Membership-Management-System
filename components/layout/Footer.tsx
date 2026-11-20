import Link from "next/link";
import Image from "next/image";
import "./Footer.css";

const footerLinks = {
  organization: [
    { label: "About Us", href: "/about" },
    { label: "Our Programs", href: "/programs" },
    { label: "Our Partners", href: "/partners" },
    { label: "Contact Us", href: "/contact" },
  ],
  explore: [
    { label: "Events", href: "/events" },
    { label: "Our Members", href: "/members" },
    { label: "News & Updates", href: "/news" },
    { label: "Resources", href: "/resources" },
  ],
  membership: [
    { label: "Become a Member", href: "/membership" },
    { label: "Membership Benefits", href: "/membership" },
    { label: "Member Stories", href: "/members" },
  ],
};

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container footer-grid">

          {/* Brand Column */}
          <div className="footer-brand">
            <Link href="/" aria-label="SEE homepage">
              <Image
                src="/logo.png"
                alt="Social Enterprise Ethiopia"
                width={300}
                height={102}
                className="footer-logo"
              />
            </Link>

            <p>
              Connecting, promoting, empowering, and advocating
              for social enterprises creating positive change
              in Ethiopia.
            </p>

            <Link href="/about" className="footer-learn-more">
              Learn more about SEE <span>→</span>
            </Link>
          </div>

          {/* Organization */}
          <div className="footer-column">
            <h3>Organization</h3>

            {footerLinks.organization.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Explore */}
          <div className="footer-column">
            <h3>Explore</h3>

            {footerLinks.explore.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Membership */}
          <div className="footer-column">
            <h3>Get Involved</h3>

            {footerLinks.membership.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}

            <Link href="/membership" className="footer-join-button">
              Join Our Community <span>↗</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} Social Enterprise Ethiopia.
            All rights reserved.
          </p>

          <Link href="/contact">Get in touch <span>↗</span></Link>
        </div>
      </div>
    </footer>
  );
}
