"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon, PhoneIcon } from "./Icons";
import { useLang } from "./LanguageProvider";
import { waLink } from "@/lib/whatsapp";

const SLIDES = ["/images/team-2.jpg", "/images/team-1.jpg"];
const INTERVAL = 5000;

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const { t } = useLang();

  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <header id="home" className="hero">
      <div className="hero-slides">
        <AnimatePresence>
          <motion.div
            key={idx}
            className="hero-slide active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            <Image
              src={SLIDES[idx]}
              alt="Advocates of Gondal Law Associates in chambers"
              fill
              priority={idx === 0}
              sizes="100vw"
              className="hero-img"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="wrap">
        <div className="hero-in">
          <motion.p className="eyebrow"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}>
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
            {t.hero.h1a}<em>{t.hero.h1em}</em>
          </motion.h1>

          <motion.p className="u-tag urdu"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.8 }}>
            انصاف ہمارا فرض، آپ کا حق
          </motion.p>

          <motion.div className="hero-names"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.7 }}>
            <div className="nm">{t.hero.name}</div>
            <div className="ds">{t.hero.role}</div>
          </motion.div>

          <motion.p className="lead"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.7 }}>
            {t.hero.lead}
          </motion.p>

          <motion.div className="hero-cta"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.7 }}>
            <a className="btn" href={waLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> {t.whatsapp}
            </a>
            <a className="btn ghost" href="tel:03334391854">
              <PhoneIcon /> 0333-4391854
            </a>
          </motion.div>
        </div>

        <div className="hero-dots" role="tablist" aria-label="Hero image selector">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={i === idx ? "on" : ""}
              aria-label={`Show image ${i + 1}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <div className="mouse" />
        <span>Scroll</span>
      </div>

      <div className="qualbar">
        <div className="wrap qualbar-in">
          <span>B.Sc</span><span>M.Sc</span><span>M.A</span><span>LL.B</span><span>LL.M</span>
        </div>
      </div>
    </header>
  );
}
