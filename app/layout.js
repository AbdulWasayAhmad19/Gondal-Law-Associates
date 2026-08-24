import "./globals.css";

export const metadata = {
  title: "Gondal Law Associates — Trusted Legal Services in Lahore",
  description:
    "Gondal Law Associates, Lahore. Aftab Alam Gondal, Senior Advocate High Court with 17+ years of experience. Civil, Criminal, Family, Banking, Tax, Corporate and Registration services. Call 0333-4391854.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
