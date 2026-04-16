import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sips of Italy",
  description:
    "Discover the art of Italian coffee — Videos, stories and traditions from Italy.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Sips of Italy",
    description:
      "Discover the art of Italian coffee — Videos, stories and traditions from Italy.",
    url: "https://sipsofitaly.bar",
    siteName: "Sips of Italy",
    images: [
      {
        url: "https://pub-8b9c2c7396314112acb0d6c1fcee430d.r2.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sips of Italy — The Art of Italian Coffee",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sips of Italy",
    description: "Discover the art of Italian coffee",
    images: [
      "https://pub-8b9c2c7396314112acb0d6c1fcee430d.r2.dev/og-image.png",
    ],
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
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
