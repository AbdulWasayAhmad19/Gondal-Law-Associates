"use client";
import { createContext, useContext, useEffect, useState } from "react";

const STRINGS = {
  en: {
    topbar: "Gondal Law Associates — Trusted Legal Services & High Court Advocates, Lahore",
    nav: { home: "Home", practice: "Practice Areas", advocates: "Our Advocate", winrate: "Winning Rate", faq: "FAQs", contact: "Contact" },
    brandName: "Gondal Law Associates",
    brandSub: "Advocates High Court",
    whatsapp: "WhatsApp Now",
    call: "Call",
    hero: {
      eyebrow: "Gondal Law Associates · Lahore",
      h1a: "Your Trusted ",
      h1em: "Legal Team",
      name: "Aftab Alam Gondal",
      role: "Senior Advocate High Court · 17+ Years Experience",
      lead: "Smart, dependable legal help across Lahore's courts — Civil, Criminal, Family, Banking, Revenue, Tax, Corporate matters and complete registration services under one chamber.",
    },
    stats: { years: "Years of Practice", cases: "Cases Handled", areas: "Practice Areas", offices: "Office Locations" },
    practice: {
      eyebrow: "Our Legal Practice Areas",
      h2: "Comprehensive Legal Services in Pakistan",
      sub: "One chamber for litigation, taxation and every registration your family or business needs.",
      litTitle: "Litigation & Court Matters",
      litSub: "Representation before all courts",
      regTitle: "Registration & Documentation",
      regSub: "Complete paperwork, done right",
      litigation: ["Civil", "Criminal", "Family Court", "Guardian Court", "Banking Court", "Revenue Court", "Income Tax", "Filer", "Copyright", "Corporate", "Trademark"],
      registration: ["Firm Registration", "Company Registration", "Court Marriage", "Domicile", "Registry", "Agreement", "Sale Deed"],
    },
    winrate: {
      eyebrow: "Our Track Record",
      h2: "Case Winning Rate",
      avg: "Average Winning Rate",
      areas: ["Civil Cases", "Criminal Cases", "Family Cases", "Banking & Recovery", "Revenue & Tax", "Corporate Matters"],
    },
    advocates: {
      eyebrow: "Our Advocate",
      h2: "Experienced. Qualified. Committed.",
      name: "Aftab Alam Gondal",
      role: "Senior Advocate High Court · 17+ Years Experience",
      bio: "With over 17 years of courtroom experience, represents clients across Lahore's district and high courts — civil, criminal, family, banking, revenue and tax matters — and manages the chamber's registration and documentation practice end to end.",
    },
    faq: {
      eyebrow: "FAQs",
      h2: "Frequently Asked Questions",
      items: [
        { q: "How can I book a consultation with Gondal Law Associates?", a: "Simply call 0333-4391854 / 0304-4660415 or message us on WhatsApp. You can also visit our office at Haji Chamber, opposite Noble Family Hospital, Lahore, or our chamber at District Court Katchery." },
        { q: "What types of cases do you handle?", a: "We handle Civil, Criminal, Family Court, Guardian Court, Banking Court, Revenue Court, Income Tax, Copyright, Corporate and Trademark matters, along with all registration and documentation services." },
        { q: "Do you assist with court marriage and its legal documentation?", a: "Yes. We arrange complete court marriage services — Nikah documentation, affidavits and legal protection — handled confidentially and strictly according to law." },
        { q: "Can you help me become a tax filer?", a: "Absolutely. We handle NTN registration, FBR filer status, annual income tax returns and related tax matters for individuals and businesses." },
        { q: "How do I register a firm or company in Pakistan?", a: "We manage the whole process — name reservation, documentation, SECP / registrar filings and post-registration compliance — so your firm or company is registered correctly the first time." },
        { q: "Where are your offices located?", a: "Main office: Office No. 5, Haji Chamber, Ground Floor, opposite Noble Family Hospital, Lahore. Court chamber: Room No. 309, Lawyers Chamber, District Court Katchery, Lahore." },
      ],
    },
    contact: {
      eyebrow: "Get In Touch",
      h2: "Visit Our Chambers",
      sub: "Walk in, call, or message us on WhatsApp — a first consultation is one conversation away.",
      main: "Main Office",
      mainAddr: "Office No. 5, Haji Chamber, Ground Floor, Opposite Noble Family Hospital, Lahore",
      court: "Court Chamber",
      courtAddr: "Lawyers Chamber Room No. 309, District Court Katchery, Lahore",
      callUs: "Call Us",
    },
    footer: {
      quick: "Quick Links",
      contact: "Contact",
      addr1: "Haji Chamber, Opposite Noble Family Hospital, Lahore",
      addr2: "Room 309, District Court Katchery, Lahore",
      rights: "All rights reserved.",
      name: "Aftab Alam Gondal — Senior Advocate High Court",
    },
    popup: {
      h3: "Need Legal Advice?",
      p: "Talk to Aftab Alam Gondal today. Message us on WhatsApp or call — we respond quickly.",
    },
  },

  ur: {
    topbar: "گوندل لا ایسوسی ایٹس — قابلِ اعتماد قانونی خدمات اور ہائی کورٹ وکلاء، لاہور",
    nav: { home: "ہوم", practice: "شعبہ جات", advocates: "ہمارے وکیل", winrate: "کامیابی کی شرح", faq: "سوالات", contact: "رابطہ" },
    brandName: "گوندل لا ایسوسی ایٹس",
    brandSub: "ایڈووکیٹس ہائی کورٹ",
    whatsapp: "واٹس ایپ کریں",
    call: "کال کریں",
    hero: {
      eyebrow: "گوندل لا ایسوسی ایٹس · لاہور",
      h1a: "آپ کی قابلِ اعتماد ",
      h1em: "قانونی ٹیم",
      name: "آفتاب عالم گوندل",
      role: "سینئر ایڈووکیٹ ہائی کورٹ · 17+ سال تجربہ",
      lead: "لاہور کی تمام عدالتوں میں ہوشیار اور قابلِ بھروسا قانونی معاونت — دیوانی، فوجداری، فیملی، بینکنگ، ریونیو، ٹیکس، کارپوریٹ معاملات اور مکمل رجسٹریشن خدمات ایک ہی چیمبر کے تحت۔",
    },
    stats: { years: "سال پریکٹس", cases: "مقدمات نمٹائے", areas: "شعبہ جات", offices: "دفاتر" },
    practice: {
      eyebrow: "ہمارے قانونی شعبہ جات",
      h2: "پاکستان میں مکمل قانونی خدمات",
      sub: "مقدمات، ٹیکس اور آپ کے خاندان یا کاروبار کی ہر رجسٹریشن کے لیے ایک ہی چیمبر۔",
      litTitle: "مقدمات اور عدالتی معاملات",
      litSub: "تمام عدالتوں میں نمائندگی",
      regTitle: "رجسٹریشن اور دستاویزات",
      regSub: "مکمل کاغذی کارروائی، درست طریقے سے",
      litigation: ["دیوانی", "فوجداری", "فیملی کورٹ", "گارڈین کورٹ", "بینکنگ کورٹ", "ریونیو کورٹ", "انکم ٹیکس", "فائلر", "کاپی رائٹ", "کارپوریٹ", "ٹریڈ مارک"],
      registration: ["فرم رجسٹریشن", "کمپنی رجسٹریشن", "کورٹ میرج", "ڈومیسائل", "رجسٹری", "معاہدہ", "بیع نامہ"],
    },
    winrate: {
      eyebrow: "ہمارا ریکارڈ",
      h2: "مقدمات میں کامیابی کی شرح",
      avg: "اوسط کامیابی کی شرح",
      areas: ["دیوانی مقدمات", "فوجداری مقدمات", "خاندانی مقدمات", "بینکنگ و ریکوری", "ریونیو و ٹیکس", "کارپوریٹ معاملات"],
    },
    advocates: {
      eyebrow: "ہمارے وکیل",
      h2: "تجربہ کار۔ اہل۔ پرعزم۔",
      name: "آفتاب عالم گوندل",
      role: "سینئر ایڈووکیٹ ہائی کورٹ · 17+ سال تجربہ",
      bio: "17 سال سے زائد عدالتی تجربے کے ساتھ، لاہور کی ضلعی اور ہائی کورٹس میں موکلوں کی نمائندگی کرتے ہیں — دیوانی، فوجداری، فیملی، بینکنگ، ریونیو اور ٹیکس کے معاملات — اور چیمبر کی رجسٹریشن اور دستاویزات کی مکمل خدمات کی نگرانی کرتے ہیں۔",
    },
    faq: {
      eyebrow: "سوالات",
      h2: "اکثر پوچھے جانے والے سوالات",
      items: [
        { q: "گوندل لا ایسوسی ایٹس سے مشاورت کیسے بک کروں؟", a: "مشاورت کے لیے 4391854-0333 یا 4660415-0304 پر کال کریں یا واٹس ایپ پر پیغام بھیجیں۔ آپ ہمارے دفتر حاجی چیمبر، نوبل فیملی ہسپتال کے سامنے، لاہور بھی تشریف لا سکتے ہیں۔" },
        { q: "آپ کس قسم کے مقدمات دیکھتے ہیں؟", a: "ہم دیوانی، فوجداری، فیملی کورٹ، گارڈین کورٹ، بینکنگ کورٹ، ریونیو کورٹ، انکم ٹیکس، کاپی رائٹ، کارپوریٹ اور ٹریڈ مارک کے مقدمات کے ساتھ ساتھ تمام رجسٹریشن خدمات فراہم کرتے ہیں۔" },
        { q: "کیا آپ کورٹ میرج اور اس کی قانونی دستاویزات میں مدد کرتے ہیں؟", a: "جی ہاں۔ ہم کورٹ میرج کی مکمل خدمات فراہم کرتے ہیں — نکاح نامہ، بیانِ حلفی اور قانونی تحفظ — مکمل رازداری اور قانون کے مطابق۔" },
        { q: "کیا آپ مجھے ٹیکس فائلر بننے میں مدد دے سکتے ہیں؟", a: "بالکل۔ ہم افراد اور کاروبار کے لیے این ٹی این رجسٹریشن، ایف بی آر فائلر اسٹیٹس اور سالانہ انکم ٹیکس ریٹرن کے معاملات سنبھالتے ہیں۔" },
        { q: "پاکستان میں فرم یا کمپنی کیسے رجسٹر کروں؟", a: "ہم پورا عمل سنبھالتے ہیں — نام کی منظوری، دستاویزات، ایس ای سی پی فائلنگ اور رجسٹریشن کے بعد کے معاملات — تاکہ آپ کی فرم یا کمپنی درست طریقے سے رجسٹر ہو۔" },
        { q: "آپ کے دفاتر کہاں واقع ہیں؟", a: "مرکزی دفتر: آفس نمبر 5، حاجی چیمبر، گراؤنڈ فلور، نوبل فیملی ہسپتال کے سامنے، لاہور۔ کورٹ چیمبر: کمرہ نمبر 309، وکلاء چیمبر، ڈسٹرکٹ کورٹ کچہری، لاہور۔" },
      ],
    },
    contact: {
      eyebrow: "رابطہ کریں",
      h2: "ہمارے دفتر تشریف لائیں",
      sub: "تشریف لائیں، کال کریں یا واٹس ایپ پر پیغام بھیجیں — پہلی مشاورت صرف ایک گفتگو کی دوری پر ہے۔",
      main: "مرکزی دفتر",
      mainAddr: "آفس نمبر 5، حاجی چیمبر، گراؤنڈ فلور، نوبل فیملی ہسپتال کے سامنے، لاہور",
      court: "کورٹ چیمبر",
      courtAddr: "وکلاء چیمبر، کمرہ نمبر 309، ڈسٹرکٹ کورٹ کچہری، لاہور",
      callUs: "کال کریں",
    },
    footer: {
      quick: "فوری لنکس",
      contact: "رابطہ",
      addr1: "حاجی چیمبر، نوبل فیملی ہسپتال کے سامنے، لاہور",
      addr2: "کمرہ 309، ڈسٹرکٹ کورٹ کچہری، لاہور",
      rights: "جملہ حقوق محفوظ ہیں۔",
      name: "آفتاب عالم گوندل — سینئر ایڈووکیٹ ہائی کورٹ",
    },
    popup: {
      h3: "قانونی مشورہ درکار ہے؟",
      p: "آج ہی آفتاب عالم گوندل سے بات کریں۔ واٹس ایپ پر پیغام بھیجیں یا کال کریں — ہم فوری جواب دیتے ہیں۔",
    },
  },
};

const LangContext = createContext({ lang: "en", t: STRINGS.en, toggle: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("gla-lang");
    if (saved === "ur") setLang("ur");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.classList.toggle("lang-ur", lang === "ur");
    try { localStorage.setItem("gla-lang", lang); } catch {}
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "ur" : "en"));

  return (
    <LangContext.Provider value={{ lang, t: STRINGS[lang], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
