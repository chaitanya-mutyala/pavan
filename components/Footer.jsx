import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Success Stories", href: "#success-stories" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="#" className="flex items-center gap-2.5">
              <Image
                src="/images/logo.jpg"
                alt=""
                width={24}
                height={24}
                className="rounded-full opacity-50 shrink-0"
                aria-hidden="true"
              />
              <div>
                <span className="font-heading text-sm font-semibold tracking-tight text-foreground block">
                  Pavan Kunapareddy
                </span>
                <span className="text-[10px] font-medium text-muted uppercase tracking-wider">
                  Digital Marketing Consultant
                </span>
              </div>
            </a>
            <p className="text-sm text-muted text-center md:text-left leading-relaxed max-w-xs">
              Helping businesses turn attention into customers.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <nav className="flex flex-wrap justify-center gap-5 sm:gap-6" aria-label="Footer navigation">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted hover:text-foreground transition-colors duration-200 min-h-[44px] flex items-center"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border text-center flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Pavan Kunapareddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
