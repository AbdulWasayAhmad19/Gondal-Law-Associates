"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "./Reveal";

/* Case-winning record by case type (95–97% band). Edit percentages here —
   cards auto-sort so the highest rate always shows first. */
const CASES = [
  { name: "Family Court",         urdu: "فیملی کورٹ مقدمات",   pct: 97 },
  { name: "Trademark",            urdu: "ٹریڈ مارک",            pct: 97 },
  { name: "Court Marriage",       urdu: "کورٹ میرج",            pct: 97 },
  { name: "Registration Matters", urdu: "رجسٹریشن معاملات",     pct: 97 },
  { name: "Civil Cases",          urdu: "دیوانی مقدمات",        pct: 96 },
  { name: "Guardian Court",       urdu: "گارڈین کورٹ",          pct: 96 },
  { name: "Revenue Court",        urdu: "ریونیو کورٹ",          pct: 96 },
  { name: "Corporate Matters",    urdu: "کارپوریٹ معاملات",     pct: 96 },
  { name: "Copyright",            urdu: "کاپی رائٹ",            pct: 96 },
  { name: "Criminal Cases",       urdu: "فوجداری مقدمات",       pct: 95 },
  { name: "Banking Court",        urdu: "بینکنگ کورٹ",          pct: 95 },
  { name: "Income Tax",           urdu: "انکم ٹیکس",            pct: 95 },
].sort((a, b) => b.pct - a.pct); // always highest rate first

function PctCounter({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1200;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <b ref={ref}>{n}%</b>;
}

export default function WinningRates() {
  return (
    <section id="winning" className="winning">
      <div className="wrap">
        <Reveal className="sec-head">
          <p className="eyebrow">Our Track Record</p>
          <h2>Case Winning Rate by Field</h2>
          <p className="u-sub urdu">ہر شعبے میں کامیابی کی شرح</p>
          <p className="en">
            A consistent 95%+ winning record across every field the chamber represents.
          </p>
          <div className="rule" />
        </Reveal>

        <div className="win-grid">
          {CASES.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 0.06}>
              <div className="win-card">
                <div className="win-top">
                  <span className="win-name">
                    {c.name}
                    <span className="win-urdu urdu">{c.urdu}</span>
                  </span>
                  <PctCounter to={c.pct} />
                </div>
                <div className="win-bar">
                  <motion.div
                    className="win-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${c.pct}%` }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 1.1, delay: (i % 4) * 0.08, ease: "easeOut" }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="win-note">
            Winning rate based on concluded matters handled by Gondal Law Associates across
            Lahore&apos;s district and high courts.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
