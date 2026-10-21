import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { IBM_Plex_Serif } from "next/font/google";

export const metadata: Metadata = {
  title: "Technocracy Group — AI-Powered Governance for the Digital Age",
  description:
    "Technocracy Group delivers enterprise-grade AI platforms for governments and enterprises — from Chief Minister Dashboards to Predictive Analytics — across 8+ countries.",
};

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-serif",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ibmPlexSerif.variable} ${ibmPlexSerif.className}`}>
      <body className={`${ibmPlexSerif.className} min-h-screen flex flex-col bg-white text-slate-900`}>
        <Nav />
        <main className="flex-1 pt-[68px] bg-[#0B1224]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}