import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TaxSafar - One Stop for All Your Tax & Compliance Needs",
  description: "Get expert support in ITR, GST, registrations, compliance, accounting, and more. Trusted by businesses across India.",
  keywords: ["Tax Filing", "GST Registration", "Income Tax", "Accounting Services", "TaxSafar", "India Tax Compliance"],
  authors: [{ name: "TaxSafar Team" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "TaxSafar - Excellence in Tax & Compliance",
    description: "Expert tax support and business registrations trusted by 50,000+ clients.",
    url: "https://taxsafar.com",
    siteName: "TaxSafar",
    images: [
      {
        url: "/dashboard_preview.png",
        width: 1200,
        height: 630,
        alt: "TaxSafar Dashboard Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaxSafar - Simplifying Tax for India",
    description: "Your digital cockpit for tax compliance and financial growth.",
    images: ["/dashboard_preview.png"],
  },
  icons: {
    icon: "/original_logo.png",
    shortcut: "/original_logo.png",
    apple: "/original_logo.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
