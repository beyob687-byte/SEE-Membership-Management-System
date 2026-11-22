"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { featuredMembers } from "@/lib/homeData";
import "./MemberShowcase.css";

export default function MemberShowcase() {
  const shouldReduceMotion = useReducedMotion();

  const mainMember = featuredMembers[0];
  const otherMembers = featuredMembers.slice(1);

  return (
    <section className="member-showcase" id="members">
      <div className="members-container">
        {/* Section heading */}
        <motion.div
          className="members-header"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="members-heading-content">
            <span className="section-eyebrow">
              THE PEOPLE BEHIND THE IMPACT
            </span>

            <h2>
              Meet the changemakers
              <br />
              <span>making a difference.</span>
            </h2>

            <p>
              Every social enterprise has a story. Discover the people,
              ideas, and businesses working to create positive change
              across Ethiopia.
            </p>
          </div>

          <Link href="/members" className="members-explore-link">
            Explore our members
            <span>↗</span>
          </Link>
        </motion.div>

        {/* Member cards */}
        <div className="members-grid">
          {/* Featured member */}
          <motion.article
            className="member-card member-card-featured"
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 35 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              href="/members"
              className="member-image-link"
              aria-label={`Explore ${mainMember.name}`}
            >
              <Image
                src={mainMember.image}
                alt={mainMember.name}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="member-image"
              />

              <span className="member-image-overlay" />
              <span className="member-featured-label">
                MEMBER SPOTLIGHT
              </span>

              <span className="member-image-arrow">↗</span>
            </Link>

            <div className="member-card-content">
              <div className="member-card-meta">
                <span>{mainMember.category}</span>
                <span>{mainMember.location}</span>
              </div>

              <h3>{mainMember.name}</h3>
              <p>{mainMember.description}</p>

              <Link href="/members" className="member-discover-link">
                Discover their story <span>↗</span>
              </Link>
            </div>
          </motion.article>

          {/* Supporting members */}
          <div className="members-secondary">
            {otherMembers.map((member, index) => (
              <motion.article
                className="member-card member-card-small"
                key={member.id}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, x: 30 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
              >
                <Link
                  href="/members"
                  className="member-small-image-link"
                  aria-label={`Explore ${member.name}`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 35vw"
                    className="member-image"
                  />

                  <span className="member-small-arrow">↗</span>
                </Link>

                <div className="member-small-content">
                  <div className="member-card-meta">
                    <span>{member.category}</span>
                    <span>{member.location}</span>
                  </div>

                  <h3>{member.name}</h3>
                  <p>{member.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
          className="members-bottom"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Are you building a business that creates positive change?
          </p>

          <Link href="/membership">
            Become part of our community <span>↗</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}