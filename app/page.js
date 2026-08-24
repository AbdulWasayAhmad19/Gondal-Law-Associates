"use client";
import { LanguageProvider, useLang } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Practice from "@/components/Practice";
import WinRate from "@/components/WinRate";
import Advocates from "@/components/Advocates";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Floaters from "@/components/Floaters";
import ScrollProgress from "@/components/ScrollProgress";

function Topbar() {
  const { t } = useLang();
  return <div className="topbar">{t.topbar}</div>;
}

export default function Home() {
  return (
    <LanguageProvider>
      <ScrollProgress />
      <Topbar />
      <Navbar />
      <Hero />
      <Stats />
      <Practice />
      <WinRate />
      <Advocates />
      <FAQ />
      <Contact />
      <Footer />
      <Floaters />
    </LanguageProvider>
  );
}
