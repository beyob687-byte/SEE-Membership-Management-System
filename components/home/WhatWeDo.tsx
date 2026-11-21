"use client";
import "./Home.css";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { whatWeDo } from "@/lib/homeData";

export default function WhatWeDo() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="what-we-do section">
      <div className="container">

        {/* Section Heading */}
        <motion.div
          className="what-we-do-header"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="what-we-do-heading-left">
            <span className="section-label">
              HOW WE MAKE A DIFFERENCE
            </span>

            <h2>
              Turning purpose
              <br />
              into <span>progress.</span>
            </h2>
          </div>

          <div className="what-we-do-heading-right">
            <p>
              A thriving social enterprise ecosystem doesn't
              happen by chance. We bring people, ideas, and
              opportunities together to create meaningful change.
            </p>

            <Link href="/programs" className="what-we-do-link">
              Explore our work
              <span>↗</span>
            </Link>
          </div>
        </motion.div>

        {/* Service Cards */}
        <div className="what-we-do-grid">
          {whatWeDo.map((item, index) => (
            <motion.article
              key={item.id}
              className={`service-card service-${item.color}`}
              initial={reduceMotion ? false : { opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: reduceMotion ? 0 : index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduceMotion ? {} : { y: -8 }}
            >
              <div className="service-card-top">
                <span className="service-card-number">
                  {item.id} / 04
                </span>

                <motion.span
                  className="service-card-symbol"
                  whileHover={reduceMotion ? {} : { rotate: 45 }}
                  transition={{ duration: 0.4 }}
                >
                  {item.symbol}
                </motion.span>
              </div>

              <div className="service-card-content">
                <span className="service-card-subtitle">
                  {item.subtitle}
                </span>

                <h3>{item.title}</h3>

                <p className="service-card-description">
                  {item.description}
                </p>
              </div>

              {/* Hover / Focus Reveal */}
              <div className="service-card-reveal">
                <span className="service-reveal-label">
                  WHAT THIS MEANS
                </span>

                <ul>
                  {item.services.map((service) => (
                    <li key={service}>
                      <span>↗</span>
                      {service}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/programs"
                  className="service-card-link"
                  aria-label={`Explore ${item.title.toLowerCase()} initiatives`}
                >
                  Explore initiatives
                  <span>↗</span>
                </Link>
              </div>

              <div className="service-card-decoration" />

            </motion.article>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          className="what-we-do-bottom"
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p>
            One ecosystem. Different strengths. A shared purpose.
          </p>

          <span className="what-we-do-bottom-symbol">✳</span>
        </motion.div>

      </div>
    </section>
  );
}
