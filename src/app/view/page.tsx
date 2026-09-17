"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";

// Allowlist to prevent open-redirect abuse — only internal /public paths allowed
const ALLOWED_PREFIXES = ["/letters/", "/certificates/", "/resume.pdf"];

function isAllowedDoc(doc: string): boolean {
  return ALLOWED_PREFIXES.some((prefix) =>
    doc === prefix || doc.startsWith(prefix)
  );
}

function PDFViewer() {
  const params = useSearchParams();
  const doc = params.get("doc") || "";
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    setIsIOS(/iPad|iPhone|iPod/.test(ua) && !(window as unknown as { MSStream?: unknown }).MSStream);
  }, []);

  if (!doc || !isAllowedDoc(doc)) {
    return (
      <div style={styles.error}>
        <p style={styles.errorText}>Invalid or missing document.</p>
        <Link href="/" style={styles.backLink}>← Back to Portfolio</Link>
      </div>
    );
  }

  const docLabel = doc.split("/").pop()?.replace(".pdf", "").replace(/-/g, " ") ?? "Document";

  return (
    <div style={styles.container}>
      {/* Minimal top bar */}
      <div style={styles.topBar}>
        <Link href="/" style={styles.backLink}>
          <span style={styles.backArrow}>←</span>
          <span>Bhavya Darji</span>
        </Link>
        <span style={styles.docLabel}>{docLabel}</span>
        <a href={doc} download style={styles.downloadBtn}>
          ↓ Download
        </a>
      </div>

      {/* PDF Embed — works on desktop + iOS Safari native renderer */}
      {isIOS ? (
        // On iOS, <embed> and <iframe> don't work in-page for PDFs.
        // We directly redirect to the PDF so Safari's built-in reader
        // handles it — but via a full-page navigate (not _blank), which
        // avoids the "black new tab" delay entirely.
        <IOSRedirect doc={doc} />
      ) : (
        <embed
          src={`${doc}#view=FitH&toolbar=1`}
          type="application/pdf"
          style={styles.embed}
          title={docLabel}
        />
      )}
    </div>
  );
}

function IOSRedirect({ doc }: { doc: string }) {
  useEffect(() => {
    // Navigate in the same tab — Safari renders PDF immediately without a black screen
    window.location.replace(doc);
  }, [doc]);

  return (
    <div style={styles.iosLoading}>
      <div style={styles.spinner} />
      <p style={styles.iosLoadingText}>Opening document…</p>
      <a href={doc} style={styles.iosFallback}>
        Tap here if it doesn't open
      </a>
    </div>
  );
}

export default function ViewPage() {
  return (
    <Suspense fallback={
      <div style={styles.iosLoading}>
        <div style={styles.spinner} />
      </div>
    }>
      <PDFViewer />
    </Suspense>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100dvh",
    width: "100%",
    background: "#0a0a12",
    overflow: "hidden",
  },
  topBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 16px",
    background: "rgba(10,10,18,0.95)",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
    flexShrink: 0,
    gap: "12px",
    minHeight: "48px",
  },
  backLink: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#5eead4",
    textDecoration: "none",
    fontSize: "0.85rem",
    fontWeight: 600,
    fontFamily: "inherit",
    whiteSpace: "nowrap",
  },
  backArrow: {
    fontSize: "1rem",
    lineHeight: 1,
  },
  docLabel: {
    color: "#94a3b8",
    fontSize: "0.78rem",
    textAlign: "center",
    flex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    textTransform: "capitalize",
  },
  downloadBtn: {
    color: "#5eead4",
    fontSize: "0.78rem",
    fontWeight: 600,
    textDecoration: "none",
    padding: "4px 10px",
    border: "1px solid rgba(94,234,212,0.3)",
    borderRadius: "6px",
    whiteSpace: "nowrap",
  },
  embed: {
    flex: 1,
    width: "100%",
    height: "100%",
    border: "none",
    background: "#fff",
  },
  iosLoading: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    background: "#0a0a12",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "3px solid rgba(94,234,212,0.15)",
    borderTop: "3px solid #5eead4",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
  iosLoadingText: {
    color: "#94a3b8",
    fontSize: "0.9rem",
    margin: 0,
  },
  iosFallback: {
    color: "#5eead4",
    fontSize: "0.85rem",
    textDecoration: "underline",
  },
  error: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100dvh",
    gap: "16px",
    background: "#0a0a12",
  },
  errorText: {
    color: "#f87171",
    fontSize: "1rem",
    margin: 0,
  },
};
