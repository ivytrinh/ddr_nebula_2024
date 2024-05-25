import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Features/NavBar";
import Footer from "./Features/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <NavBar/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
