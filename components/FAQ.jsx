"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const { lang, t } = useLang();

  return (
    <section id="faq">
      <div className="wrap">
        <Reveal className="sec-head">
          <p className="eyebrow">{t.faq.eyebrow}</p>
          <h2>{t.faq.h2}</h2>
          <p className="u-sub urdu">اکثر پوچھے جانے والے سوالات</p>
          <div className="rule" />
        </Reveal>
        <div className="faq-list">
          {t.faq.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    className="faq-q"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    {f.q}
                    <span className="plus">+</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="faq-a">
                          <p className={lang === "ur" ? "urdu" : ""}>{f.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
