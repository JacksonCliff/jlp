import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Work_Sans, Poppins } from 'next/font/google';



const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "600",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-workSans",
  weight: "400",
});





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${workSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
