import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { Header } from "@/components/global/Header/Header";
import { KillBackground } from "@/components/global/Background/KillBackground";
import { LayoutShell } from "@/components/providers/layout-shell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OriginFlow | High-Scale Marketing CRM & Website Builder",
  description: "The professional standard for high-conversion website building and data intelligence. Design like a pro, convert like a machine.",
  keywords: ["SaaS", "CRM", "Website Builder", "Marketing Automation", "React Builder"],
  authors: [{ name: "OriginFlow Team" }],
  // Favicon configuration
  icons: {
    icon: "/favicon.ico", // Standard favicon
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png", // For iOS home screens
  },
  // OpenGraph (Social Media Previews)
  openGraph: {
    title: "OriginFlow | Build the Future Pixel by Pixel",
    description: "The first AI-native website builder with a built-in marketing engine.",
    url: "https://originflow.app",
    siteName: "OriginFlow",
    images: [
      {
        url: "/og-image.png", // Create a 1200x630 image and put it in /public
        width: 1200,
        height: 630,
        alt: "OriginFlow Interface Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OriginFlow",
    description: "The professional standard for high-conversion marketing sites.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#09090b]`}>
        <KillBackground />
        <Header />
        <LayoutShell>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </LayoutShell>
      </body>
    </html>
  );
}
