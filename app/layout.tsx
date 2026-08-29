import type { Metadata } from "next";
import "./globals.css";
import "./work-overrides.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Bitoom Consulting — Applied AI & Computer Vision",
  description: "Bitoom Consulting helps teams prototype, build and productionize computer vision, machine vision and ML systems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="grid-backdrop" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
