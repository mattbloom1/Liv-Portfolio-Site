import type { Metadata } from "next";
import { DM_Sans, Grenze, Ibarra_Real_Nova } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { assetVars } from "@/lib/assets";
import "./globals.css";

const display = Ibarra_Real_Nova({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"], variable: "--font-display", fallback: ["Georgia", "serif"] });
const sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-sans", fallback: ["system-ui", "sans-serif"] });
const accent = Grenze({ subsets: ["latin"], weight: ["500"], variable: "--font-accent", fallback: ["Georgia", "serif"] });

export const metadata: Metadata = {
  title: { default: "Liv Polani — Fashion Portfolio", template: "%s — Liv Polani" },
  description: "Fashion portfolio of Liv Polani: trend research, concept development and collections.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${accent.variable}`}>
      <body style={assetVars}>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
