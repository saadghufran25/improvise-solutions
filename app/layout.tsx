import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Improvise Solutions | Staffing & Site Support",
  description:
    "UK-based staffing and site support company providing security, safety, traffic management, cleaning, and construction labour for dependable operations.",
  openGraph: {
    title: "Improvise Solutions | Staffing & Site Support",
    description:
      "Trusted manpower and site support services for security, safety, construction, traffic control, and cleaning across the UK.",
    url: "https://www.improvisesolutions.co.uk",
    images: [
      {
        url: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Improvise Solutions site support",
      },
    ],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-base text-gray-100 antialiased">{children}</body>
    </html>
  );
}
