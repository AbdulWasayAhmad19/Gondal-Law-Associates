"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Seal from "./Seal";
import { WhatsAppIcon, PhoneIcon } from "./Icons";

export default function ConsultPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("gla-popup-seen")) return;
    const t = setTimeout(() => setShow(true), 7000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setShow(false);
    sessionStorage.setItem("gla-popup-seen", "1");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="popup-scrim"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            className="popup"
            role="dialog"
            aria-label="Free consultation"
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="x" aria-label="Close" onClick={close}>×</button>
            <Seal />
            <h3>Need Legal Advice?</h3>
            <p className="u urdu">پہلی مشاورت صرف ایک پیغام کی دوری پر</p>
            <p>
<<<<<<< HEAD
              Talk to Aftab Alam Gondal today. Message us on WhatsApp
=======
              Talk to Syed Sohail Ahmad Shah or Aftab Alam Gondal today. Message us on WhatsApp
>>>>>>> d7e158385832673866b2b7be0dcef5431691f412
              or call — we respond quickly.
            </p>
            <a className="btn" href="https://wa.me/923334391854" target="_blank" rel="noopener noreferrer" onClick={close}>
              <WhatsAppIcon /> WhatsApp Now
            </a>
            <a className="btn dark-ghost" style={{ width: "100%", justifyContent: "center" }} href="tel:03334391854" onClick={close}>
              <PhoneIcon /> Call 0333-4391854
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
