import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Open_Sans , Ubuntu ,Playball} from 'next/font/google';





const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-openSans",
  weight: "600",
});

const ubuntu = Ubuntu({
    subsets: ["latin"],
    variable: "--font-ubuntu",
    weight : "400"

});

const playBall = Playball({
    subsets: ["latin"],
    variable: "--font-playBall",
    weight : "400"
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${ubuntu.variable} ${playBall.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
