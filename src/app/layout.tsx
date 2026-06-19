import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BakkersLab | Premium bloem voor zuurdesem en pizza",
  description:
    "BakkersLab selecteert premium bloem, starters en technische kennis voor zuurdesem en pizza.",
  icons: {
    icon: "/images/bakkerslab-logo.png",
    shortcut: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
