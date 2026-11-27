"use client";
import "./Home.css";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  animate,
  useInView,
  useReducedMotion,
} from "motion/react";

import { impactStats } from "@/lib/homeData";

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!isInView) return;

    if (reduceMotion) {
      setCount(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setCount(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value, reduceMotion]);

  return (
    <span ref={ref} className="impact-counter">
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function ImpactStats() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="impact-section">
      <div className="container">

        <motion.div
          className="impact-header"
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="impact-eyebrow">
            OUR COLLECTIVE IMPACT
          </span>

          <h2>
            Together, we're building
            <br />
            <span>a movement for change.</span>
          </h2>
        </motion.div>

        <div className="impact-grid">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="impact-card"
              initial={reduceMotion ? false : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: reduceMotion ? 0 : index * 0.15,
              }}
            >
              <div className="impact-card-top">
                <span className={`impact-dot impact-dot-${index + 1}`} />
                <span className="impact-card-index">
                  0{index + 1}
                </span>
              </div>

              <div className="impact-number">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </div>

              <h3>{stat.label}</h3>

              <p>{stat.description}</p>

              <div className="impact-card-line" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="impact-bottom"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span>WE IMPACT. WE PROFIT.</span>
          <span className="impact-bottom-decoration">
            ✳
          </span>
          <span>BUSINESS FOR GOOD.</span>
        </motion.div>

      </div>
    </section>
  );
}
