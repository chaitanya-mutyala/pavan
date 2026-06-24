"use client";

import { motion } from "framer-motion";

const brands = [
  "Sri Lakshmi Textiles",
  "Amalapuram Fresh Bites",
  "RK Constructions",
  "Vanya Collections",
  "BF Fashions",
  "Konaseema Travels",
  "Godavari Spices",
  "Royal Kitchen",
  "Sai Electronics",
  "Krishna Jewellers",
  "AP Tourism Stays",
  "Green Farms Organic",
];

export default function Brands() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="eyebrow">Trusted Locally</span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mt-3 sm:mt-4">
            Businesses We&apos;ve Worked With
          </h2>
          <p className="text-muted mt-3 sm:mt-4 max-w-md mx-auto text-sm sm:text-base leading-snug text-balance">
            Local retailers and regional brands that trusted Pavan to grow online.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="flex items-center justify-center rounded-xl border border-border bg-surface/50 px-4 sm:px-6 py-4 sm:py-5 hover:border-border-light transition-colors duration-200 min-h-[56px]"
            >
              <span className="font-heading text-xs sm:text-sm font-medium text-muted text-center leading-snug">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
