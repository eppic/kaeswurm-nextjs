import type { Metadata } from "next";
import "./globals.css";

import { Encode_Sans_Expanded } from "next/font/google";
import { Encode_Sans_Semi_Condensed } from "next/font/google";
import { Encode_Sans_Condensed } from "next/font/google";

import { Encode_Sans } from "next/font/google";

const encexpFont = Encode_Sans_Expanded({ // buttons
  subsets: ["latin"],
  weight: "400",
  variable: "--font-encexp",
});

const encconsemiFont = Encode_Sans_Semi_Condensed({ // text
  subsets: ["latin"],
  weight: "400",
});

const encconFont = Encode_Sans_Condensed({ // header1
  subsets: ["latin"],
  weight: "600", // SemiBold
  variable: "--font-enccon",
});

const encFont = Encode_Sans({
  subsets: ["latin"],
  variable: "--font-encexp",
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
    <html 
      lang="en"
      className={`${encexpFont.variable} ${encconFont.variable}`}
    >
      <body
        className={`${encconsemiFont.className} antialiased` }
      >
        {children}
      </body>
    </html>
  );
}
