"use client";
import Reveal from "./Reveal";
import { WhatsAppIcon, PhoneIcon, PinIcon, CourtIcon } from "./Icons";
import { useLang } from "./LanguageProvider";
import { waLink } from "@/lib/whatsapp";

export default function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <Reveal className="sec-head">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.h2}</h2>
          <p className="u-sub urdu">ہمارے دفتر تشریف لائیں یا کال کریں</p>
          <p className="en">{t.contact.sub}</p>
          <div className="rule" />
        </Reveal>
        <div className="c-grid">
          <Reveal delay={0.05}>
            <div className="c-card">
              <h3><PinIcon /> {t.contact.main}</h3>
              <p>{t.contact.mainAddr}</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="c-card">
              <h3><CourtIcon /> {t.contact.court}</h3>
              <p>{t.contact.courtAddr}</p>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="c-card">
              <h3><PhoneIcon /> {t.contact.callUs}</h3>
              <a className="tel" href="tel:03334391854">0333-4391854</a>
              <a className="tel" href="tel:03044660415">0304-4660415</a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="c-cta">
            <a className="btn" href={waLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> {t.whatsapp}
            </a>
            <a className="btn ghost" href="tel:03044660415">
              <PhoneIcon /> 0304-4660415
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
