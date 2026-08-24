"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

const chipVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.95 },
  show: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
};

function Chips({ items }) {
  return (
    <div className="chips">
      {items.map((c, i) => (
        <motion.span
          key={c}
          className="chip"
          custom={i}
          variants={chipVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {c}
        </motion.span>
      ))}
    </div>
  );
}

export default function Practice() {
  const { t } = useLang();
  return (
    <section id="practice" className="practice">
      <div className="wrap">
        <Reveal className="sec-head">
          <p className="eyebrow">{t.practice.eyebrow}</p>
          <h2>{t.practice.h2}</h2>
          <p className="u-sub urdu">پاکستان میں مکمل قانونی خدمات</p>
          <p className="en">{t.practice.sub}</p>
          <div className="rule" />
        </Reveal>
        <div className="pgroups">
          <Reveal delay={0.1}>
            <div className="pgroup">
              <h3>{t.practice.litTitle}</h3>
              <p className="u-h urdu">مقدمات اور عدالتی معاملات</p>
              <div className="sub">{t.practice.litSub}</div>
              <Chips items={t.practice.litigation} />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="pgroup">
              <h3>{t.practice.regTitle}</h3>
              <p className="u-h urdu">رجسٹریشن اور دستاویزات</p>
              <div className="sub">{t.practice.regSub}</div>
              <Chips items={t.practice.registration} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
