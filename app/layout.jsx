import { Sometype_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "@/_components/MainNav";
import PageTransition from "@/_components/PageTransition";
import RectangleTransition from "@/_components/RectangleTransition";
import Gradient from "@/_components/Gradient";
import Header from "@/_components/Header";

const sometypeMono = Sometype_Mono({
  variable: "--font-sometypeMono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohamed Afifi",
  description: "portfolio for Mohamed Afifi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${sometypeMono.variable} antialiased overflow-hidden relative min-h-[100dvh] `}
      >
        <Gradient />
        <RectangleTransition />
        <PageTransition>
          <div className="flex">
            <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary">
              <MainNav />
            </div>
            <div className="w-full max-w-[1130px] px-[15px] mx-auto">
              <Header />
              <div>{children}</div>
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
