"use client";
import Image from "next/image";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

const QUALS = ["B.Sc", "M.Sc", "M.A", "LL.B", "LL.M"];

export default function Advocates() {
  const { t } = useLang();
  return (
    <section id="advocates">
      <div className="wrap">
        <Reveal className="sec-head">
          <p className="eyebrow">{t.advocates.eyebrow}</p>
          <h2>{t.advocates.h2}</h2>
          <p className="u-sub urdu">تجربہ کار، اہل اور پرعزم وکیل</p>
          <div className="rule" />
        </Reveal>
        <div className="adv-grid single">
          <Reveal delay={0.1}>
            <article className="adv-card">
              <div className="ph">
                <Image
                  src="/images/portrait.jpg"
                  alt="Aftab Alam Gondal, Senior Advocate High Court"
                  fill
                  sizes="(max-width: 960px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />
              </div>
              <div className="body">
                <h3>{t.advocates.name}</h3>
                <div className="role">{t.advocates.role}</div>
                <p>{t.advocates.bio}</p>
                <div className="quals">{QUALS.map((q) => <span key={q}>{q}</span>)}</div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
