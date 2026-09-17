import React from "react";

/**
 * On iOS and mobile browsers, opening PDFs with target="_blank" forces Safari to open
 * a blank black tab while initializing WebKit's native PDF plugin in a separate process.
 * Navigating directly in the same tab renders immediately without any black screen,
 * and allows the user to swipe back seamlessly to the portfolio at their exact scroll position.
 * On desktop, default behavior is preserved (opens in a new tab via target="_blank").
 */
export function handlePdfClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  url?: string
) {
  if (!url) return;
  if (typeof window !== "undefined") {
    const isMobile =
      /iPad|iPhone|iPod|Android/i.test(navigator.userAgent) ||
      window.innerWidth < 768;
    if (isMobile) {
      e.preventDefault();
      window.location.href = url;
    }
  }
}
