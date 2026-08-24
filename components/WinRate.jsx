"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

const RATES = [96, 95, 95, 94, 94, 94];
const URDU = ["دیوانی مقدمات", "فوجداری مقدمات", "خاندانی مقدمات", "بینکنگ و ریکوری", "ریونیو و ٹیکس", "کارپوریٹ معاملات"];

function RateBar({ area, urdu, rate, inView, delay, showUrdu }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    let raf;
    const start = performance.now() + delay;
    const tick = (t) => {
      const p = Math.min(Math.max((t - start) / dur, 0), 1);
      setN(Math.round(rate * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, rate, delay]);

  return (
    <div className="wr-row">
      <div className="wr-label">
        <span className="wr-area">{area}</span>
        {showUrdu && <span className="wr-urdu urdu">{urdu}</span>}
      </div>
      <div className="wr-track">
        <div
          className="wr-fill"
          style={{ width: inView ? `${rate}%` : "0%", transitionDelay: `${delay}ms` }}
        />
      </div>
      <b className="wr-pct">{n}%</b>
    </div>
  );
}

export default function WinRate() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { lang, t } = useLang();

  return (
    <section id="winrate" className="winrate">
      <div className="wrap">
        <Reveal className="sec-head">
          <p className="eyebrow">{t.winrate.eyebrow}</p>
          <h2>{t.winrate.h2}</h2>
          <p className="u-sub urdu">مقدمات میں کامیابی کی شرح</p>
          <div className="rule" />
        </Reveal>
        <div className="wr-panel" ref={ref}>
          <div className="wr-bars">
            {t.winrate.areas.map((area, i) => (
              <RateBar
                key={area}
                area={area}
                urdu={URDU[i]}
                rate={RATES[i]}
                inView={inView}
                delay={i * 140}
                showUrdu={lang === "en"}
              />
            ))}
          </div>
          <div className="wr-avg">
            <div className="wr-avg-num">95%</div>
            <div className="wr-avg-label">{t.winrate.avg}</div>
            <div className="wr-avg-urdu urdu">اوسط کامیابی کی شرح</div>
          </div>
        </div>
      </div>
    </section>
  );
}
