import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import { PdfPreloader } from "@/components/PdfPreloader";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
  title: "Bhavya Darji — B.Tech AI & Data Science '28 · Full-Stack & AI Engineer · Building Velaar",
  description:
    "Portfolio of Bhavya Darji — B.Tech AI & Data Science '28, Full-Stack & AI Engineer building Velaar. Specializing in RAG pipelines, React, Next.js, and Supabase. Based in Mumbai, India.",
  keywords: [
    "Bhavya Darji",
    "Full-Stack Engineer",
    "AI Engineer",
    "Velaar",
    "RAG Pipelines",
    "React Native",
    "Next.js",
    "Mumbai",
  ],
  authors: [{ name: "Bhavya Darji" }],
  openGraph: {
    title: "Bhavya Darji — B.Tech AI & Data Science '28 · Full-Stack & AI Engineer",
    description:
      "Full-stack and AI engineer building Velaar, an AI-native educational copilot platform with RAG and Gemini. Based in Mumbai.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">
        <PdfPreloader />
        {children}
      </body>
    </html>
  );
}
