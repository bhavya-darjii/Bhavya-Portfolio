import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Document Viewer — Bhavya Darji",
  robots: "noindex",
};

export default function ViewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
