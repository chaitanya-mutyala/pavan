"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

const videoTestimonials = [
  {
    business: "Sri Lakshmi Textiles",
    summary: "Seasonal sales grew after digital marketing.",
    src: "/videos/testimonal1.mp4",
  },
  {
    business: "Amalapuram Fresh Bites",
    summary: "Content and ads drove consistent bookings.",
    src: "/videos/testimonal2.mp4",
  },
];

const textTestimonials = [
  {
    name: "Ravi Kumar",
    business: "Sri Lakshmi Textiles",
    text: "Best Diwali season in 5 years after Pavan took over our marketing.",
  },
  {
    name: "Suresh Reddy",
    business: "Amalapuram Fresh Bites",
    text: "One viral reel changed everything. We're fully booked most weekends now.",
  },
  {
    name: "Lakshmi Devi",
    business: "Vanya Collections",
    text: "Younger customers started walking in within a month of our first campaign.",
  },
  {
    name: "Krishna Rao",
    business: "RK Constructions",
    text: "Four major projects closed in 3 months. I didn't believe digital could work for us.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="eyebrow">Client Testimonials</span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mt-3">
            What Business Owners Say
          </h2>
        </motion.div>

        {/* Video testimonials — featured first, secondary below */}
        <div className="mb-10 sm:mb-16">
          <p className="label-muted mb-4 sm:mb-6 text-center">
            Video Reviews
          </p>
          <div className="flex flex-col gap-6 sm:gap-8">
            <motion.figure
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mx-auto w-full max-w-4xl rounded-2xl overflow-hidden border border-border-light bg-surface"
            >
              <div className="relative">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full aspect-video object-cover bg-black"
                  poster="/images/hero.jpg"
                >
                  <source src={videoTestimonials[0].src} type="video/mp4" />
                </video>
                <span className="absolute top-3 left-3 eyebrow bg-background/90 px-2.5 py-1 rounded-full text-[10px]">
                  Featured Review
                </span>
              </div>
              <figcaption className="px-5 sm:px-6 py-4 sm:py-5 border-t border-border">
                <p className="font-heading text-base sm:text-lg font-semibold">{videoTestimonials[0].business}</p>
                <p className="text-sm text-muted mt-1 leading-snug">{videoTestimonials[0].summary}</p>
              </figcaption>
            </motion.figure>

            <motion.figure
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="mx-auto w-full max-w-2xl rounded-2xl overflow-hidden border border-border bg-surface/60"
            >
              <div className="relative">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full aspect-video object-cover bg-black"
                  poster="/images/hero.jpg"
                >
                  <source src={videoTestimonials[1].src} type="video/mp4" />
                </video>
                <span className="absolute top-3 left-3 eyebrow bg-background/90 px-2.5 py-1 rounded-full text-[10px]">
                  Client Video
                </span>
              </div>
              <figcaption className="px-5 py-4 border-t border-border">
                <p className="font-heading text-sm font-semibold">{videoTestimonials[1].business}</p>
                <p className="text-[13px] text-muted mt-1 leading-snug">{videoTestimonials[1].summary}</p>
              </figcaption>
            </motion.figure>
          </div>
        </div>

        {/* Written testimonials */}
        <div>
          <p className="label-muted mb-4 sm:mb-5 text-center sm:text-left">
            Written Reviews
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {textTestimonials.map((testimonial, i) => (
              <motion.blockquote
                key={testimonial.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-background p-5 sm:p-6 flex flex-col"
              >
                <p className="text-[15px] sm:text-base text-foreground/90 leading-relaxed flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <footer className="mt-5 pt-4 border-t border-border-light">
                  <cite className="not-italic font-heading text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </cite>
                  <p className="text-[12px] text-muted mt-0.5">{testimonial.business}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto px-8"
          >
            Message on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
