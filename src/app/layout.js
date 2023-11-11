import { Suspense } from 'react';
import { Inter } from 'next/font/google';

import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Loading from '@/components/Loading';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'bg-slate-700'}>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
