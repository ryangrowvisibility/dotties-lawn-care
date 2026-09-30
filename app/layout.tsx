import type { Metadata } from "next";
import { Nunito, Mulish, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dottie's Lawn Care — Toronto & East York",
  description:
    "Husband-and-wife owner-operated lawn care and gardening in Toronto and East York. Dottie and Lorne Stokes treat every property as if it were their own — 5.0 across every Google review.",
  openGraph: {
    title: "Dottie's Lawn Care — Toronto & East York",
    description:
      "Dottie and Lorne — meticulous lawn care, gardening, and small hardscape across Toronto and East York. 5.0 across 11 reviews. Every review answered personally.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${mulish.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col">{children}</body>
    </html>
  );
}
