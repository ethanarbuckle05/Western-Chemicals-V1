import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Western Chemicals",
  description: "Turning wastewater into the world's cheapest fuels.",
  metadataBase: new URL("https://westernchemicals.com"),
  openGraph: {
    title: "Western Chemicals",
    description: "Turning wastewater into the world's cheapest fuels.",
    url: "https://westernchemicals.com",
    siteName: "Western Chemicals",
    images: [
      {
        url: "/hero.jpg",
        width: 1382,
        height: 773,
        alt: "Western Chemicals — industrial facility in the American West",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Western Chemicals",
    description: "Turning wastewater into the world's cheapest fuels.",
    images: ["/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
