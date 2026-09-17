import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
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
  title: "Bhavya Darji — Software Development Engineer",
  description:
    "Portfolio of Bhavya Darji — Web & Mobile Developer specializing in React Native, Next.js, WordPress, and premium digital experiences. Based in Mumbai, India.",
  keywords: [
    "Bhavya Darji",
    "Software Developer",
    "React Native",
    "Web Developer",
    "Mumbai",
    "Portfolio",
  ],
  authors: [{ name: "Bhavya Darji" }],
  openGraph: {
    title: "Bhavya Darji — Software Development Engineer",
    description:
      "Crafting digital experiences that feel effortless. Web & mobile developer from Mumbai.",
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
      <head>
        {/* Prefetch PDFs so they are cached before the user taps — eliminates the black screen delay on iOS */}
        <link rel="prefetch" href="/resume.pdf" as="document" />
        <link rel="prefetch" href="/letters/bhavya-optisoft-vision-recommendation-letter.pdf" as="document" />
        <link rel="prefetch" href="/letters/bhavya-vinayak-soft-solutions-recommendation-letter.pdf" as="document" />
        <link rel="prefetch" href="/letters/bhavya-webgyor-technologies-recommendation-letter.pdf" as="document" />
        <link rel="prefetch" href="/letters/bhavya-ayika-offer-letter.pdf" as="document" />
      </head>
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
