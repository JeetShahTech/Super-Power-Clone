import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import  { StoreProvider } from "@/store/provider";
import StoreInitializer from "./StoreInitializor";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Superpower",
  description: "Unlock your new health intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <StoreInitializer />
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
