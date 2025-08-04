'use client'
import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import Head from "next/head";

import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Banner/Banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({  children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="icon.png"  />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="z-0">
        {pathname === "/" && <Banner />}
        </div>
        <Header />
        <main className='z-10'>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
