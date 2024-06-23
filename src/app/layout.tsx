import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/main.css';
import { Header } from '@/components/Header';
import { ReactNode } from 'react';
import cn from 'classnames';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Главная - easypdf',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'flex min-h-screen flex-col')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
