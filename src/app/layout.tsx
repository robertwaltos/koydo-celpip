import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koydo CELPIP — Canadian English Language Proficiency Index Program Prep",
  description:
    "Free CELPIP practice for Listening, Reading, Writing, and Speaking with AI analytics.",
  metadataBase: new URL("https://celpip.koydo.app"),
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
  other: { "theme-color": "#DC2626" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
