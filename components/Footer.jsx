"use client";
import Seal from "./Seal";
import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="f-grid">
          <div>
            <div className="f-brand">
              <Seal />
              <span>
                <strong style={{ fontFamily: "'Playfair Display',serif", fontSize: 18 }}>
                  {t.brandName}
                </strong>
                <br />
                <small style={{ letterSpacing: ".2em", textTransform: "uppercase", fontSize: 10 }}>
                  {t.brandSub} · {t.nav.home === "Home" ? "Lahore" : "لاہور"}
                </small>
              </span>
            </div>
            <p className="f-urdu urdu">گوندل لا ایسوسی ایٹس — انصاف ہمارا فرض، آپ کا حق</p>
          </div>
          <div>
            <h4>{t.footer.quick}</h4>
            <a href="#home">{t.nav.home}</a>
            <a href="#practice">{t.nav.practice}</a>
            <a href="#winrate">{t.nav.winrate}</a>
            <a href="#advocates">{t.nav.advocates}</a>
            <a href="#faq">{t.nav.faq}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
          <div>
            <h4>{t.footer.contact}</h4>
            <a href="tel:03334391854">0333-4391854</a>
            <a href="tel:03044660415">0304-4660415</a>
            <p>{t.footer.addr1}</p>
            <p>{t.footer.addr2}</p>
          </div>
        </div>
        <div className="f-bottom">
          <span>© {new Date().getFullYear()} Gondal Law Associates. {t.footer.rights}</span>
          <span>{t.footer.name}</span>
        </div>
      </div>
    </footer>
  );
}
