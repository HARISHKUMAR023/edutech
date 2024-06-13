// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from './context/AuthContext';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] });
import fivcon from './favicon.ico'
export const metadata: Metadata = {
  
  title: 'Kavasam Learning Academy',
  description: 'Developed by Harish',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
    
        <body className={inter.className}>
        {/* <link rel="icon" href="./favicon.ico" sizes="any" /> */}
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
