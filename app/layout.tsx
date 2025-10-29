import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Update this with your production URL when deploying
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://promatesupplier.id/';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Promate - Custom Karpet Mobil Premium Tangerang",
  description: "Upgrade tampilan kabin mobil Anda dengan karpet premium khusus dari Promate. Material 7D premium, waterproof, anti slip. Free Home Service di Jabodetabek.",
  openGraph: {
    title: "Promate - Custom Karpet Mobil Premium Tangerang",
    description: "Custom karpet mobil premium untuk berbagai merek. Material 7D waterproof dengan teknologi terbaru.",
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Promate",
    images: [
      {
        url: "/static/Hero.png",
        width: 1200,
        height: 630,
        alt: "Promate - Custom Karpet Mobil Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promate - Custom Karpet Mobil Premium Tangerang",
    description: "Custom karpet mobil premium untuk berbagai merek. Material 7D waterproof dengan teknologi terbaru.",
    images: ["/static/Hero.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700,600,500&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Promate",
              description: "Custom Karpet Mobil Premium Tangerang",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tangerang",
                addressRegion: "Banten",
                addressCountry: "ID",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "500",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-brand-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}

