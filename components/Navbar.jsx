"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Seal from "./Seal";
import { WhatsAppIcon } from "./Icons";
import { useLang } from "./LanguageProvider";
import { waLink } from "@/lib/whatsapp";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, t, toggle } = useLang();

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#practice", label: t.nav.practice },
    { href: "#winrate", label: t.nav.winrate },
    { href: "#advocates", label: t.nav.advocates },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap nav-in">
          <a className="brand" href="#home" aria-label="Gondal Law Associates home">
            <Seal />
            <span>
              <span className="brand-name">{t.brandName}</span>
              <br />
              <span className="brand-sub">{t.brandSub}</span>
            </span>
          </a>
          <div className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
          <button className="lang-btn" onClick={toggle} aria-label="Switch language">
            {lang === "en" ? <span className="urdu">اردو</span> : <span>English</span>}
          </button>
          <a className="btn desktop-cta" href={waLink()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> {t.whatsapp}
          </a>
          <button className="hamburger" aria-label="Open menu" onClick={() => setOpen(true)}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <div className="drawer">
            <motion.div
              className="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <button className="close" aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                  {l.label} <span style={{ color: "var(--gold)" }}>→</span>
                </a>
              ))}
              <button className="lang-btn in-drawer" onClick={() => { toggle(); setOpen(false); }}>
                {lang === "en" ? <span className="urdu">اردو میں دیکھیں</span> : <span>View in English</span>}
              </button>
              <a className="btn" href={waLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> {t.whatsapp}
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
