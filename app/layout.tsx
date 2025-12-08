import type { Metadata } from "next";
import "./globals.css";

import { Header, Footer } from "@/app/components/SiteWrap";

import { Encode_Sans } from "next/font/google";

const encodeSans = Encode_Sans({
  variable: "--font-encode",
  subsets: ["latin"],
  axes: ["wdth"],   // <- DAS FEHLT BEI DIR
});


export const metadata: Metadata = {
  title: "Line Dance by Cheesy",
  description: "Astrid Kaeswurm - Line Dance Tutor, Line Dance Buch und Kurse im Angebot!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${encodeSans.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
