import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { DeviceGate } from "@/components/ui/DeviceGate";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Website BEM FILKOM UB",
  description:
    "Interactive digital product showcase for Website BEM FILKOM UB by IT Solutions Bureau — SGE FILKOM UB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth antialiased`}
    >
      <body>
        <DeviceGate>{children}</DeviceGate>
      </body>
    </html>
  );
}
