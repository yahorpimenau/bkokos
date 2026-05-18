import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Nunito_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Big Kokos | Full-Service Development",
    template: "%s | Big Kokos",
  },
  description:
    "Websites, apps, CRM integrations, and automation — all from one team. Turnkey development for startups and businesses.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Big Kokos | Full-Service Development",
    description:
      "Websites, apps, CRM integrations, and automation — all from one team.",
    url: "https://bkokos.vercel.app",
    siteName: "Big Kokos",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Kokos | Full-Service Development",
    description:
      "Websites, apps, CRM integrations, and automation — all from one team.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://bkokos.vercel.app"),
  other: {
    "msapplication-TileColor": "#311908",
    "theme-color": "#311908",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${nunitoSans.variable} ${spaceMono.variable}`}
    >
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <div className="grainy-overlay"></div>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
