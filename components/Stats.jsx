"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

function Counter({ to, suffix = "+" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
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

  return <b ref={ref}>{n}{suffix}</b>;
}

export default function Stats() {
  const { t } = useLang();
  return (
    <div className="stats">
      <div className="wrap">
        <Reveal>
          <div className="stats-in">
            <div className="stat"><Counter to={17} /><span>{t.stats.years}</span></div>
            <div className="stat"><Counter to={1200} /><span>{t.stats.cases}</span></div>
            <div className="stat"><Counter to={18} suffix="" /><span>{t.stats.areas}</span></div>
            <div className="stat"><Counter to={2} suffix="" /><span>{t.stats.offices}</span></div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
