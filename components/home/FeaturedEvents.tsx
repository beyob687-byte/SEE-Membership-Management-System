"use client";
import "./FeaturedEvents.css";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { featuredEvents } from "@/lib/homeData";

export default function FeaturedEvents() {
  const shouldReduceMotion = useReducedMotion();
  const mainEvent = featuredEvents[0];
  const otherEvents = featuredEvents.slice(1);

  return (
    <section className="featured-events" id="events">
      <div className="events-container">
        <motion.div
          className="events-header"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="section-eyebrow">BE PART OF THE MOVEMENT</span>
            <h2>
              Ideas become impact
              <br />
              <span>when we come together.</span>
            </h2>
          </div>

          <Link href="/events" className="events-all-link">
            Explore all events <span>↗</span>
          </Link>
        </motion.div>

        <div className="events-layout">
          {/* Featured event */}
          <motion.article
            className="event-featured"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="event-featured-top">
              <span className="event-category">{mainEvent.category}</span>
              <span className="event-status">UPCOMING</span>
            </div>

            <div className="event-featured-content">
              <div className="event-date-large">
                <span>{mainEvent.month}</span>
                <strong>{mainEvent.date}</strong>
                <small>{mainEvent.year}</small>
              </div>

              <div className="event-featured-info">
                <h3>{mainEvent.title}</h3>
                <p>{mainEvent.description}</p>

                <div className="event-meta">
                  <span>
                    <span aria-hidden="true">⌖</span>
                    {mainEvent.location}
                  </span>
                </div>

                <Link href="/events" className="event-details-link">
                  Event details <span>↗</span>
                </Link>
              </div>
            </div>

            <div className="event-featured-decoration" aria-hidden="true">
              SEE
            </div>
          </motion.article>

          {/* Other events */}
          <div className="event-list">
            {otherEvents.map((event, index) => (
              <motion.article
                className="event-list-item"
                key={event.id}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, x: 25 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="event-list-date">
                  <span>{event.month}</span>
                  <strong>{event.date}</strong>
                </div>

                <div className="event-list-info">
                  <span className="event-category">{event.category}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <span className="event-location">{event.location}</span>
                </div>

                <Link
                  href="/events"
                  className="event-arrow"
                  aria-label={`View ${event.title}`}
                >
                  ↗
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}