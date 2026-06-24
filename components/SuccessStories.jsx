"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    business: "Sri Lakshmi Textiles",
    challenge: "Competitors went digital. Foot traffic fell.",
    strategy: "Meta Ads + Instagram reels.",
    outcome: "+40% store visits. Best Diwali in 5 years.",
  },
  {
    business: "Amalapuram Fresh Bites",
    challenge: "New restaurant. Zero online presence.",
    strategy: "Viral reviews + Google Business.",
    outcome: "500K views. Booked out in 6 weeks.",
  },
  {
    business: "RK Constructions",
    challenge: "Word-of-mouth only.",
    strategy: "Website + lead-gen Meta Ads.",
    outcome: "150+ leads. 4 projects closed.",
  },
];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="section bg-surface/30 border-y border-border">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 sm:mb-14 text-center"
        >
          <span className="eyebrow">Proven Results</span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mt-3">
            Success Stories
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.business}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-background p-5 sm:p-6"
            >
              <h3 className="font-heading text-base sm:text-lg font-semibold mb-5 pb-4 border-b border-border-light">
                {study.business}
              </h3>

              <dl className="space-y-4">
                <div className="grid grid-cols-[4.5rem_1fr] gap-x-3 gap-y-0.5 items-baseline">
                  <dt className="label-muted">Challenge</dt>
                  <dd className="text-[13px] sm:text-sm text-muted leading-snug">
                    {study.challenge}
                  </dd>
                </div>

                <div className="grid grid-cols-[4.5rem_1fr] gap-x-3 gap-y-0.5 items-baseline">
                  <dt className="label-muted">Strategy</dt>
                  <dd className="text-[13px] sm:text-sm text-muted leading-snug">
                    {study.strategy}
                  </dd>
                </div>

                <div className="grid grid-cols-[4.5rem_1fr] gap-x-3 gap-y-0.5 items-baseline pt-3 border-t border-border-light">
                  <dt className="label-outcome">Outcome</dt>
                  <dd className="text-[13px] sm:text-sm text-foreground font-medium leading-snug">
                    {study.outcome}
                  </dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
