import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Fullscreen Burger Menu
 * ------------------------------------------------------------
 * - Drop this component anywhere (e.g. in your site header).
 * - Requires Tailwind CSS. Animations by Framer Motion.
 * - Accessible: focus trap-ish, ESC to close, aria attributes.
 * - Locks body scroll while open.
 *
 * Props:
 *  - items?: Array<{ label: string; href: string }>
 *  - title?: string (shown at top-left of overlay)
 */
export default function BurgerMenu({
  items = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  title = "Menu",
}: {
  items?: { label: string; href: string }[];
  title?: string;
}) {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Focus management + ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      const t = setTimeout(() => firstLinkRef.current?.focus(), 50);
      window.addEventListener("keydown", onKey);
      return () => {
        clearTimeout(t);
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [open]);

  // Close on route change click
  const handleLinkClick = () => setOpen(false);

  return (
    <div className="relative z-[60]">
      {/* Burger Button */}
      <button
        ref={buttonRef}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="fullscreen-menu"
        onClick={() => setOpen((v) => !v)}
        className="group inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-black/10 bg-white/80 backdrop-blur text-black shadow-sm hover:shadow transition duration-200"
      >
        <span className="sr-only">Toggle menu</span>
        <Hamburger open={open} />
      </button>

      {/* Overlay Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="fullscreen-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-white/95 backdrop-blur"
            role="dialog"
            aria-modal="true"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 pt-6">
              <div className="text-sm tracking-wide uppercase text-black/70">{title}</div>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-black/10 bg-white text-black shadow-sm hover:shadow transition"
              >
                <Hamburger open={true} />
              </button>
            </div>

            {/* Links */}
            <motion.nav
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="h-[calc(100vh-5rem)] flex items-center justify-center px-6"
            >
              <ul className="grid gap-4 text-center">
                {items.map((item, i) => (
                  <li key={item.href}>
                    <a
                      {...(i === 0 ? { ref: firstLinkRef } : {})}
                      href={item.href}
                      onClick={handleLinkClick}
                      className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Footer bits (optional) */}
            <div className="absolute bottom-6 left-0 right-0 px-6 sm:px-8 flex items-center justify-between text-xs text-black/60">
              <span>© {new Date().getFullYear()}</span>
              <span className="hidden sm:block">Press Esc to close</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Hamburger({ open }: { open: boolean }) {
  return (
    <div className="relative w-6 h-6" aria-hidden>
      <span
        className={`absolute left-0 top-1/4 h-[2px] w-full bg-current transition-transform duration-200 ${
          open ? "translate-y-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-1/2 h-[2px] w-full bg-current transition-opacity duration-200 -translate-y-1/2 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 bottom-1/4 h-[2px] w-full bg-current transition-transform duration-200 ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </div>
  );
}
