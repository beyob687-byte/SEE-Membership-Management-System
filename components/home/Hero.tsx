"use client";
import "./Hero.css";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero">
      <div className="hero-container container">

        {/* Left Content */}
        <div className="hero-content">

          <motion.div
            className="hero-eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="hero-eyebrow-line" />
            BUILDING A BETTER TOMORROW
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Business for
            <br />
            <span className="hero-title-highlight">
              good.
            </span>
            <br />
            Impact for
            <br />
            everyone.
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We bring together entrepreneurs, organizations,
            and changemakers to build a thriving social
            enterprise ecosystem in Ethiopia.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <motion.div
              whileHover={reduceMotion ? {} : { y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link href="/membership" className="btn btn-primary hero-primary-btn">
                Become a Member
                <span aria-hidden="true">↗</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={reduceMotion ? {} : { y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link href="/about" className="hero-secondary-btn">
                Discover Our Work
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-bottom-note"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="hero-note-indicator">
              <span />
              <span />
              <span />
            </div>
            <p>Creating change through enterprise.</p>
          </motion.div>

        </div>

        {/* Right Visual */}
        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, x: 35 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* Decorative Brand Shapes */}
          <div className="hero-decoration hero-decoration-one" />
          <div className="hero-decoration hero-decoration-two" />

          {/* Main Image */}
          <div className="hero-image-wrapper">
            <div className="hero-photo" role="img" aria-label="Social entrepreneurs working together to create positive change" />

            <div className="hero-image-overlay" />
          </div>

          {/* Floating Information Card */}
          <motion.div
            className="hero-floating-card"
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={reduceMotion ? {} : { y: -6 }}
          >
            <div className="hero-card-icon">
              <span>✳</span>
            </div>

            <div>
              <strong>Purpose meets possibility.</strong>
              <p>Growing a community of changemakers.</p>
            </div>

            <span className="hero-card-arrow">↗</span>
          </motion.div>

          {/* Vertical Label */}
          <div className="hero-vertical-label">
            SOCIAL ENTERPRISE ETHIOPIA
          </div>

        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.a
        href="#who-we-are"
        className="hero-scroll"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>SCROLL TO EXPLORE</span>
        <motion.span
          className="hero-scroll-arrow"
          animate={reduceMotion ? {} : { y: [0, 7, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ↓
        </motion.span>
      </motion.a>

    </section>
  );
}
