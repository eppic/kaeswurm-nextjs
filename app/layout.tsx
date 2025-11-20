import type { Metadata } from "next";
import "./globals.css";

import { Encode_Sans_Expanded } from "next/font/google";

const encexpFont = Encode_Sans_Expanded({
  subsets: ["latin"],
  weight: "400",
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
    <html lang="en">
      <body
        className={`${encexpFont.className} antialiased` }
      >
        {children}
      </body>
    </html>
  );
}
