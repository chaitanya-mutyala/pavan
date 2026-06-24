"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const reels = [
  {
    url: "https://www.instagram.com/p/DD0tOBoz6UG/embed/",
    title: "Viral Content — Regional Food Vlog",
  },
  {
    url: "https://www.instagram.com/p/DZR_lqYg0IE/embed/",
    title: "Viral Content — Community Story",
  },
  {
    url: "https://www.instagram.com/p/DZYzq8vKYwg/embed/",
    title: "Viral Content — Local Business Feature",
  },
];

function LazyInstagramEmbed({ url, title }) {
  const ref = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="aspect-[4/5] relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface">
          <div className="w-7 h-7 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {shouldLoad && (
        <iframe
          src={url}
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          title={title}
        />
      )}
    </div>
  );
}

export default function FeaturedContent() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const cardWidth = container.firstElementChild?.offsetWidth ?? 1;
    const gap = 20;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(Math.max(index, 0), reels.length - 1));
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.children[index];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  };

  return (
    <section id="featured-content" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14 text-center"
        >
          <span className="eyebrow">Social Proof</span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mt-3 sm:mt-4 text-balance">
            Content That Reached Millions
          </h2>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-3 gap-5 lg:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-hide pb-2 lg:pb-0 -mx-5 px-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
          aria-label="Viral campaign videos"
        >
          {reels.map((reel, i) => (
            <motion.div
              key={reel.url}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex-shrink-0 w-[82vw] max-w-[340px] sm:w-[55vw] sm:max-w-[380px] lg:w-auto lg:max-w-none snap-center"
            >
              <div className="rounded-2xl border border-border bg-surface overflow-hidden">
                <LazyInstagramEmbed url={reel.url} title={reel.title} />
              </div>
            </motion.div>
          ))}
        </div>

        <div
          className="flex lg:hidden justify-center mt-6 gap-2"
          role="tablist"
          aria-label="Video carousel navigation"
        >
          {reels.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={activeIndex === i}
              aria-label={`Go to video ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`min-h-[44px] min-w-[44px] flex items-center justify-center`}
            >
              <span
                className={`block rounded-full transition-all duration-200 ${
                  activeIndex === i
                    ? "h-2 w-6 bg-foreground/60"
                    : "h-2 w-2 bg-border-light"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
