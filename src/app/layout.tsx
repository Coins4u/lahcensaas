import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { SITE } from "@/lib/site";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Dev utilities by ${SITE.creator}`,
    template: `%s | ${SITE.shortName}`,
  },
  description: `Personal browser utilities by ${SITE.creator}, web developer in Morocco. 25 local-first tools for SEO, formatting, and daily dev work.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
