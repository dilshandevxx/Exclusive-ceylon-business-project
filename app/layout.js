"use client";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { CartProvider } from "@/context/CartContext";
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  return (
    <html lang="en">
      <head>
        <title>Exclusive Ceylon - Premium Sri Lankan Products</title>
        <meta name="description" content="Curated premium items from Ceylon for the world." />
      </head>
      <body>
        <AuthProvider>
          <CartProvider>
            {!isAdmin && <Header />}
            <main>
              {children}
            </main>
            {!isAdmin && <Footer />}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
