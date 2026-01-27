import "./globals.css";
import { Open_Sans, Ubuntu, Playball, Dancing_Script, Monsieur_La_Doulaise, Great_Vibes, Pacifico } from "next/font/google";

export const metadata = {
  title: "Romantic Letter",
};

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing",
});

const monsieur = Monsieur_La_Doulaise({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-monsieur",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-openSans",
  weight: "600",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: "400",
});

const playBall = Playball({
  subsets: ["latin"],
  variable: "--font-playBall",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${ubuntu.variable} ${playBall.variable} ${dancing.variable} ${greatVibes.variable} ${pacifico.variable} ${monsieur.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
