"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/constants";

const trustStats = [
  { value: "150K+", label: "Followers" },
  { value: "20+", label: "Brands" },
  { value: "10M+", label: "Reach" },
  { value: "3+", label: "Yrs Exp" },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-[100dvh] flex flex-col justify-center pt-[4.5rem] pb-10 sm:pt-24 sm:pb-16"
    >
      <div className="section-inner py-10 sm:py-16 lg:py-28 xl:py-32">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-28 lg:items-center">
          {/* Photo — first on mobile for instant recognition */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 sm:mb-10 lg:mb-0 lg:order-2 flex justify-center lg:px-4 xl:px-8"
          >
            <div className="relative w-[min(100%,340px)] sm:w-[min(100%,380px)] lg:w-full lg:max-w-[400px] xl:max-w-[420px]">
              <div className="relative overflow-hidden rounded-[1.25rem] border border-border-light bg-surface">
                <Image
                  src="/images/hero.jpg"
                  alt="Pavan Kunapareddy — Digital Marketing Consultant"
                  width={600}
                  height={750}
                  priority
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 440px"
                  className="object-cover aspect-[4/5] w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="lg:order-1 flex flex-col lg:pr-4 xl:pr-8"
          >
            <p className="eyebrow mb-4">Digital Marketing Consultant</p>

            <h1 className="font-heading text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem] xl:text-7xl font-bold tracking-[-0.02em] mb-3 sm:mb-4">
              Pavan Kunapareddy
            </h1>

            <p className="font-heading text-lg sm:text-xl lg:text-2xl font-medium tracking-tight text-foreground/85 mb-5 sm:mb-6 text-balance max-w-[22rem] sm:max-w-md">
              I grow local businesses with SEO, ads, and content.
            </p>

            <p className="text-[15px] sm:text-base text-muted leading-relaxed max-w-[20rem] sm:max-w-sm mb-8 sm:mb-10 text-balance">
              Trusted by 20+ brands across Konaseema. Proven results, not vanity metrics.
            </p>

            {/* CTAs — WhatsApp primary, full width on mobile */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center mb-10 sm:mb-12">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto px-8 text-[15px] sm:text-base"
              >
                Message on WhatsApp
              </a>
              <a
                href="#featured-video"
                className="btn-secondary w-full sm:w-auto px-8 text-[15px] sm:text-base border-transparent bg-transparent hover:bg-surface/50"
              >
                Watch Introduction
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex items-center gap-6 sm:gap-8 pt-8 border-t border-border-light">
              {trustStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-lg sm:text-xl font-heading font-bold tracking-tight text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-medium text-muted uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
