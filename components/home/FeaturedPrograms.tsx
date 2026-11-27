"use client";
import "./Home.css";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { featuredPrograms } from "@/lib/homeData";

export default function FeaturedPrograms() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="featured-programs section">
      <div className="container">

        {/* Header */}
        <motion.div
          className="programs-header"
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="section-label">
              OUR INITIATIVES
            </span>

            <h2>
              Creating change,
              <br />
              <span>one initiative at a time.</span>
            </h2>
          </div>

          <div className="programs-header-right">
            <p>
              Explore how we're strengthening social enterprises
              and building an inclusive, sustainable ecosystem
              across Ethiopia.
            </p>

            <Link href="/programs" className="programs-view-all">
              Explore all programs
              <span>↗</span>
            </Link>
          </div>
        </motion.div>

        {/* Program Grid */}
        <div className="programs-grid">
          {featuredPrograms.map((program, index) => (
            <motion.article
              key={program.id}
              className={`program-card program-${program.size} program-${program.accent}`}
              initial={reduceMotion ? false : {
                opacity: 0,
                y: 40,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: reduceMotion ? 0 : index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href="/programs"
                className="program-card-link"
                aria-label={`Learn more about ${program.category}`}
              >
                <div className="program-image">
                  <Image
                    src={program.image}
                    alt={program.category}
                    fill
                    sizes={
                      program.size === "large"
                        ? "(max-width: 768px) 100vw, 60vw"
                        : "(max-width: 768px) 100vw, 40vw"
                    }
                    className="program-photo"
                  />

                  <div className="program-image-overlay" />

                  <span className="program-number">
                    {program.id}
                  </span>

                  <span className="program-arrow">
                    ↗
                  </span>
                </div>

                <div className="program-card-content">
                  <span className="program-category">
                    {program.category}
                  </span>

                  <h3>{program.title}</h3>

                  <p>{program.description}</p>

                  <span className="program-learn-more">
                    Learn more
                    <span>→</span>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          className="programs-bottom"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="programs-bottom-star">✳</span>

          <p>
            From individual entrepreneurs to an entire ecosystem,
            every effort moves us forward.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
