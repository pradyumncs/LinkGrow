import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://linkgrow.online"),
  title: "LinkGrow | Private iPhone Photo Vault, End-to-End Encrypted",
  description:
    "Free iPhone photo vault. Encrypted on your device with AES-256-GCM, opened by a pattern you draw. No LinkGrow account. Free: 3 vaults, 100 photos, 10 videos.",
  keywords: [
    "photo vault",
    "encrypted photo vault",
    "private vault iphone",
    "aes 256 photo locker",
    "apple hidden album alternative",
    "keepsafe alternative",
    "zero knowledge vault",
  ],
  authors: [{ name: "LinkGrow" }],
  openGraph: {
    title: "LinkGrow | Private iPhone Photo Vault, End-to-End Encrypted",
    description:
      "Your Hidden album isn't actually hidden. LinkGrow is. Client-side AES-256-GCM encryption with 5x5 pattern unlock and zero accounts.",
    url: "https://linkgrow.online",
    siteName: "LinkGrow",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkGrow | Private iPhone Photo Vault",
    description:
      "Encrypted on your iPhone with AES-256-GCM, opened by a pattern you draw. No accounts, no backdoors.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LinkGrow",
    operatingSystem: "iOS 16.0 or later",
    applicationCategory: "SecurityApplication",
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "LinkGrow Free",
      },
      {
        "@type": "Offer",
        price: "19.99",
        priceCurrency: "USD",
        name: "LinkGrow Pro Annual",
      },
      {
        "@type": "Offer",
        price: "39.99",
        priceCurrency: "USD",
        name: "LinkGrow Lifetime",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      ratingCount: "34",
    },
  };

  return (
    <html lang="en" className="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-white text-slate-900 selection:bg-indigo-500/20 selection:text-indigo-900">
        {children}
      </body>
    </html>
  );
}
