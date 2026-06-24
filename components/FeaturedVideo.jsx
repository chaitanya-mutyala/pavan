"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FOCUS_AREAS = [
  "SEO & Google Ads",
  "Social Media Growth",
  "Content Creation & Branding",
];

export default function FeaturedVideo() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="featured-video"
      className="section bg-surface/40 border-y border-border"
    >
      {/* Mobile-first: video breaks out to feel dominant */}
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="eyebrow text-center mb-6 sm:mb-8"
        >
          Business Introduction
        </motion.p>
      </div>

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-[calc(100%-2rem)] sm:w-[min(92vw,480px)] md:w-[min(85vw,520px)] lg:w-[min(70vw,580px)] xl:w-[min(640px,100%)]"
      >
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[1.25rem] border border-border bg-surface">
          <div className="aspect-[4/5] w-full relative">
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-surface">
                <div className="w-7 h-7 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            {shouldLoad ? (
              <iframe
                src="https://www.instagram.com/p/DZzp409SQwt/embed/"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                title="Konaseema Digital Marketing — Business Introduction by Pavan Kunapareddy"
              />
            ) : null}
          </div>
        </div>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mx-auto max-w-lg mt-7 sm:mt-9 px-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-3"
      >
        {FOCUS_AREAS.map((item) => (
          <li key={item} className="flex items-center gap-2 justify-center sm:justify-start">
            <svg
              className="w-3.5 h-3.5 text-accent shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span className="text-[13px] sm:text-sm text-muted">{item}</span>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
