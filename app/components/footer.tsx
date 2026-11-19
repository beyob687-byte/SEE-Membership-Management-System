import Image from "next/image";
import Link from "next/link";
import "./footer.css";

const footerLinks = [
  { label: "Home", href: "/" },
  //   { label: "About Us", href: "/about" },
  //   { label: "Our Work", href: "/our-work" },
  //   { label: "Membership", href: "/membership" },
  //   { label: "Contact", href: "/contact" },
];

const socialLinks = [
  //   { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
  //   { label: "Instagram", href: "#" },
  //   { label: "Twitter / X", href: "#" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Main Footer */}
        <div className="footer-main">
          {/* Organization */}
          <div className="footer-brand">
            <Link href="/" aria-label="Social Enterprise Ethiopia home">
              <Image
                src="/see-logo.png"
                alt="Social Enterprise Ethiopia"
                width={299}
                height={63}
                className="footer-logo"
              />
            </Link>

            <p>
              {/* Add your organization description here */}
              Your organization description goes here.
            </p>

            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h3>Contact Us</h3>

            <ul className="footer-contact">
              <li>
                <span>Email</span>
                <a href="mailto:your-email@example.com">
                  your-email@example.com
                </a>
              </li>

              <li>
                <span>Phone</span>
                <a href="tel:+251900000000">+251 900 000 000</a>
              </li>

              <li>
                <span>Address</span>
                <p>Your organization address</p>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-column footer-newsletter">
            <h3>Stay Connected</h3>
            <p>
              {/* Add your newsletter description here */}
              Add a short message inviting visitors to stay updated.
            </p>

            {/* <form
              className="newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                required
              />
              <button type="submit" aria-label="Subscribe">
                →
              </button>
            </form> */}
            <small>Newsletter subscription can be connected later.</small>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          {/* <p>
            © {new Date().getFullYear()} Social Enterprise Ethiopia. All rights
            reserved.
          </p> */}

          <div className="footer-bottom-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
