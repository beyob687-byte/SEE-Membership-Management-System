"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { developmentPartners } from "@/lib/homeData";
import "./DevelopmentPartners.css";

export default function DevelopmentPartners() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="development-partners" id="partners">
      <div className="partners-container">
        <motion.div
          className="partners-header"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">OUR COLLABORATORS</span>

          <h2>
            Progress happens
            <br />
            <span>when we work together.</span>
          </h2>

          <p>
            We collaborate with organizations and institutions that share
            our commitment to building an inclusive and sustainable social
            enterprise ecosystem in Ethiopia.
          </p>
        </motion.div>

        {/* Partner logos */}
        <motion.div
          className="partners-logo-grid"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          {developmentPartners.map((partner, index) => (
            <motion.a
              key={partner.id}
              href={partner.website}
              target={partner.website === "#" ? undefined : "_blank"}
              rel={partner.website === "#" ? undefined : "noopener noreferrer"}
              className="partner-logo-card"
              aria-label={partner.name}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.1,
              }}
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={180}
                height={90}
                className="partner-logo"
              />
            </motion.a>
          ))}
        </motion.div>

        <div className="partners-footer">
          <p>
            Interested in supporting Ethiopia's social enterprise ecosystem?
          </p>

          <Link href="/contact" className="partners-contact-link">
            Let's collaborate <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}