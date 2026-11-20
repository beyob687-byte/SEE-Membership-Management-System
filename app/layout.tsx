import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Social Enterprise Ethiopia",
    template: "%s | Social Enterprise Ethiopia",
  },
  description:
    "Social Enterprise Ethiopia connects, promotes, empowers, and advocates for social enterprises creating positive change.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
