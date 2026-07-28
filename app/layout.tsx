import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "G-Unit Cakes | Custom Cakes Made for Your Moment",
  description:
    "Order custom celebration cakes, cupcakes, sweet treats, and branded gifts from G-Unit Cakes. Start your personalised order on WhatsApp.",
  openGraph: {
    title: "G-Unit Cakes | Made for Your Moment",
    description:
      "Thoughtfully designed custom cakes and sweet treats for birthdays, milestones, events, and gifting.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "G-Unit Cakes - Made for your moment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "G-Unit Cakes | Made for Your Moment",
    description:
      "Custom celebration cakes and sweet treats, designed around your moment.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/g-unit-cakes-logo.png",
    apple: "/g-unit-cakes-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
