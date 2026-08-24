// Central WhatsApp helper so every button on the site sends the same
// pre-filled greeting instead of opening an empty chat.
export const WHATSAPP_MESSAGE = "AOA, I want to avail Gondal Law services.";

export function waLink(phone = "923334391854") {
  return `https://wa.me/${phone}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
