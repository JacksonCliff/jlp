import "./globals.css";
import { Open_Sans , Ubuntu ,Playball} from 'next/font/google';

import { Dancing_Script } from 'next/font/google';

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing',
});

import { Great_Vibes, Pacifico } from 'next/font/google';

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
});

export const metadata = {
  title: 'Romantic Letter',
};



const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
});


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
        className={`${openSans.variable} ${ubuntu.variable} ${playBall.variable} ${dancing.variable} ${greatVibes.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
