"use client";
import "./Home.css";

import Link from "next/link";
import Image from "next/image";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import { aboutContent } from "@/lib/homeData";

export default function AboutPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="about-preview section" id="who-we-are">
      <div className="container about-preview-container">

        {/* Image Side */}
        <motion.div
          className="about-visual"
          initial={reduceMotion ? false : { opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="about-image-frame">
            <Image
              src={aboutContent.image}
              alt="Social Enterprise Ethiopia community working together"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="about-image"
            />
          </div>

          <div className="about-image-accent" />

          <motion.div
            className="about-image-caption"
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className="about-caption-symbol">✳</span>
            <div>
              <strong>Purpose-driven.</strong>
              <p>Impact-focused.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          className="about-content"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">
            {aboutContent.eyebrow}
          </span>

          <h2 className="about-title">
            Where purpose
            <br />
            meets <span>enterprise.</span>
          </h2>

          <p className="about-description">
            {aboutContent.description}
          </p>

          <div className="about-mission">
            <span className="about-mission-line" />

            <div>
              <span className="about-mission-label">
                OUR MISSION
              </span>

              <p>{aboutContent.mission}</p>
            </div>
          </div>

          <ul className="about-highlights">
            {aboutContent.highlights.map((item, index) => (
              <motion.li
                key={item}
                initial={reduceMotion ? false : { opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.12,
                }}
              >
                <span>✓</span>
                {item}
              </motion.li>
            ))}
          </ul>

          <Link href="/about" className="about-link">
            Discover Our Story
            <span>↗</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
